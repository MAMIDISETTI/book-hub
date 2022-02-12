import {Component} from 'react'

import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import ReactSlick from '../ReactSlick'
import Header from '../Header'
import FooterSection from '../FooterSection'
import './index.css'

const apiStatusSliders = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusSliders.initial,
    booksList: [],
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: apiStatusSliders.inProgress})

    const url = 'https://apis.ccbp.in/book-hub/top-rated-books'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)

      const updatedData = fetchedData.books.map(product => ({
        id: product.id,
        authorName: product.author_name,
        coverPic: product.cover_pic,
        title: product.title,
      }))
      // console.log(updatedData)
      this.setState({
        booksList: updatedData,
        apiStatus: apiStatusSliders.success,
      })
    } else {
      this.setState({apiStatus: apiStatusSliders.failure})
    }
  }

  onLoading = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  onFailure = () => (
    <div className="home-failure-container">
      <img
        src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1644475249/Screenshot_2022-02-10_120907_ggyjpy.png"
        className="failure-image-home"
        alt="failure view"
      />
      <p className="home-failure-desc">
        Something went wrong. Please try again
      </p>
      <button className="home-failure-button" type="button">
        Try Again
      </button>
    </div>
  )

  onSuccess = () => {
    const {booksList} = this.state
    return (
      <>
        <ReactSlick booksList={booksList} key={booksList.id} />
      </>
    )
  }

  renderAllSliders = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusSliders.success:
        return this.onSuccess()
      case apiStatusSliders.inProgress:
        return this.onLoading()
      case apiStatusSliders.onFailure:
        return this.onFailure()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-bg-inside-container">
            <div className="home-container-main">
              <h1 className="home-heading">Find Your Next Favorite Books?</h1>
              <p className="home-desc">
                You are in the right place.Tell us what titles or genres you
                have enjoyed in the past, and we will give you surprisingly
                insightful recommendations.
              </p>
              <div className="home-top-rated-container">
                <div className="home-top-heading-container">
                  <h1 className="top-rated-heading-main">TopRated Books</h1>
                  <Link to="/bookshelves" className="">
                    <button className="home-button-main" type="button">
                      Find Books
                    </button>
                  </Link>
                </div>
                {this.renderAllSliders()}
              </div>
            </div>
            <div className="home-container-main-small">
              <h1 className="home-heading">Find Your Next Favorite Books?</h1>
              <p className="home-desc">
                You are in the right place.Tell us what titles or genres you
                have enjoyed in the past, and we will give you surprisingly
                insightful recommendations.
              </p>
              <Link to="/bookshelves">
                <button className="home-button-mobile" type="button">
                  Find Books
                </button>
              </Link>

              <div className="home-slick-container-small">
                <div className="home-slick-top-container">
                  <h1 className="top-rated-heading-small">Top Rated Books</h1>
                </div>
                <div className="slider-container-small-mobile">
                  <div className="">{this.renderAllSliders()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </>
    )
  }
}
export default Home
