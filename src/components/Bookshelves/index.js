import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'

import FiltersBook from '../FiltersBook'
import Books from '../Books'
import Header from '../Header'
import FooterSection from '../FooterSection'
import './index.css'

const booksList = [
  {
    name: 'All',
    employmentTypeId: 'ALL',
  },
  {
    name: 'Read',
    employmentTypeId: 'READ',
  },
  {
    name: 'Currently Reading',
    employmentTypeId: 'CURRENTLY_READING',
  },
  {
    name: 'Want to Read',
    employmentTypeId: 'WANT_TO_READ',
  },
]

const apiStatusConstants = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Bookshelves extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    bookShelvesList: [],
    searchInput: '',
    activeCategoryId: booksList[0].employmentTypeId,
    // heading: booksList[0].name,
  }

  componentDidMount() {
    this.getBookshelves()
  }

  getBookshelves = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput, activeCategoryId} = this.state
    const url = `https://apis.ccbp.in/book-hub/books?shelf=${activeCategoryId}&search=${searchInput}`

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.books.map(eachBook => ({
        id: eachBook.id,
        title: eachBook.title,
        readStatus: eachBook.read_status,
        rating: eachBook.rating,
        authorName: eachBook.author_name,
        coverPic: eachBook.cover_pic,
      }))
      console.log(updatedData)
      this.setState({
        bookShelvesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  changeCategory = activeCategoryId => {
    this.setState({activeCategoryId}, this.getBookshelves)
  }

  renderSuccessView = () => {
    const {bookShelvesList} = this.state
    const renderBookList = bookShelvesList.length > 0
    return renderBookList ? (
      <ul className="bookshelves-render-all-books">
        {bookShelvesList.map(book => (
          <Books bookData={book} key={book.id} />
        ))}
      </ul>
    ) : (
      <div className="">
        <h1 className="">No Books found</h1>
      </div>
    )
  }

  renderFailureView = () => (
    <div className="bookshelves-failure-container">
      <img
        src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1644475249/Screenshot_2022-02-10_120907_ggyjpy.png"
        className="failure-image-bookshelves"
        alt="failure view"
      />
      <p className="bookshelves-failure-desc">
        Something went wrong. Please try again
      </p>
      <button
        className="bookshelves-failure-button"
        type="button"
        onClick={this.getBookshelves}
      >
        Try Again
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="bookshelves-loading-view" testid="loader">
      <Loader type="TailSpin" color="blue" height="50" width="50" />
    </div>
  )

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getBookshelves()
    }
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderAllBooks = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    const {activeCategoryId} = this.state
    return (
      <>
        <Header />
        <div className="bookshelves-bg-container">
          <div className="bookshelves-search-desktop">
            <div className="bookshelves-menu-container">
              <h1 className="bookshelves-menu-container-heading">
                Bookshelves
              </h1>
              <ul className="bookshelves-ul-menu">
                <FiltersBook
                  booksList={booksList}
                  changeCategory={this.changeCategory}
                  activeCategoryId={activeCategoryId}
                />
              </ul>
            </div>
            <div className="bookshelves-main-container">
              <div className="bookshelves-main-search-container">
                <p className="bookshelves-main-heading">All Books</p>
                <div className="search-container">
                  <input
                    className="bookshelves-search-input-value"
                    type="search"
                    placeholder="Search"
                    onChange={this.onSearchInput}
                    onKeyDown={this.onEnterSearchInput}
                  />
                  <button
                    className="bookshelves-search-input-button"
                    type="button"
                    onClick={this.getBookshelves}
                    key="label"
                  >
                    <BsSearch className="bookshelves-icon" />
                  </button>
                </div>
              </div>
              {this.renderAllBooks()}
            </div>
          </div>
        </div>
        <FooterSection />
      </>
    )
  }
}
export default Bookshelves
