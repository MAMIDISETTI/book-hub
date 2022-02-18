import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'
import './index.css'

const Books = props => {
  const {bookData} = props
  const {coverPic, title, readStatus, rating, authorName, id} = bookData
  return (
    <>
      <li className="books-list-container">
        <Link to={`/book/${id}`} className="">
          <img src={coverPic} alt={title} className="books-image" />
        </Link>
        <div className="titles-books-container">
          <h1 className="books-title">{title}</h1>
          <p className="books-author-name">{authorName}</p>
          <div className="books-rating-container">
            <p className="books-rating-avg">Avg Rating</p>
            <BsFillStarFill className="bookshelves-rating-icon" />
            <p className="books-rating">{rating}</p>
          </div>
          <div className="books-li-status-container">
            <p className="books-read-status">Status : </p>
            <p className="books-read-status-p">{readStatus}</p>
          </div>
        </div>
      </li>
    </>
  )
}
export default Books
