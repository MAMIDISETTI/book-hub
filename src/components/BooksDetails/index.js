import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsStarFill} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FooterSection from '../FooterSection'
import './index.css'

const apiStatusConstants = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class BooksDetails extends Component {
  state = {
    jobData: {},
    bookApiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getBooksDetails()
  }

  getFormattedData = data => ({
    id: data.id,
    authorName: data.author_name,
    coverPic: data.cover_pic,
    aboutBook: data.about_book,
    rating: data.rating,
    readStatus: data.read_status,
    title: data.title,
    aboutAuthor: data.about_author,
  })

  getBooksDetails = async () => {
    this.setState({bookApiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/book-hub/books/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const booksData = await response.json()
      console.log(booksData)
      const updatedBooksData = this.getFormattedData(booksData.book_details)
      this.setState({
        jobData: updatedBooksData,
        bookApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({bookApiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {jobData} = this.state
    const {
      authorName,
      coverPic,
      rating,
      readStatus,
      title,
      aboutBook,
      aboutAuthor,
    } = jobData
    return (
      <>
        <div className="">
          <img src={coverPic} alt={title} className="" />
          <div className="">
            <h1 className="">{title}</h1>
            <p className="">{authorName}</p>
            <div className="">
              <p className="">Avg Rating</p>
              <div className="">
                <BsStarFill className="" />
                <p className="">{rating}</p>
              </div>
            </div>
            <div className="">
              <p className="">Status:</p>
              <p className="">{readStatus}</p>
            </div>
          </div>
        </div>
        <hr className="" />
        <div className="">
          <h1 className="">About Author</h1>
          <p className="">{aboutAuthor}</p>
          <h1 className="">About Book</h1>
          <p className="">{aboutBook}</p>
        </div>
      </>
    )
  }

  renderFailureView = () => (
    <div className="">
      <img
        src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1644475249/Screenshot_2022-02-10_120907_ggyjpy.png"
        className=""
        alt="failure view"
      />
      <p className="">Something went wrong. Please try again</p>
      <button className="" type="button" onClick={this.getBooksDetails}>
        Try Again
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="bookshelves-loading-view" testid="loader">
      <Loader type="TailSpin" color="blue" height="50" width="50" />
    </div>
  )

  renderALlDetailsBook = () => {
    const {bookApiStatus} = this.state

    switch (bookApiStatus) {
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
    return (
      <>
        <Header />
        <div className="">{this.renderALlDetailsBook()}</div>
        <FooterSection />
      </>
    )
  }
}
export default BooksDetails
