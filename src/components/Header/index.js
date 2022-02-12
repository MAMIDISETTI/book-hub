import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="navbar-container">
      <div className="navbar-container-large">
        <div className="navbar-book-hub-log-container">
          <a className="logo-align logo-link" href="/">
            <img
              src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1644335920/1644335366517_nwbo39.jpg"
              alt="website logo"
              className="logo-images"
            />
          </a>
        </div>
        <ul className="navbar-menu-section">
          <li>
            <a className="navbar-menu-section-content link-text" href="/">
              Home
            </a>
          </li>
          <li>
            <a
              className="navbar-menu-section-content link-text"
              href="/bookshelves"
            >
              Bookshelves
            </a>
          </li>
          <button
            className="navbar-button"
            type="button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)
