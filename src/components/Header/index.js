import {withRouter, Link} from 'react-router-dom'

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
          <Link to="/" className="logo-align logo-link">
            <img
              src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1644335920/1644335366517_nwbo39.jpg"
              alt="website logo"
              className="logo-images"
            />
          </Link>
        </div>
        <ul className="navbar-menu-section">
          <li>
            <Link to="/" className="navbar-menu-section-content link-text">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="navbar-menu-section-content link-text"
              to="/bookshelves"
            >
              Bookshelves
            </Link>
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
      <div className="navbar-container-small-container">
        <div className="navbar-container-small">
          <div className="navbar-book-hub-container-small">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1644335920/1644335366517_nwbo39.jpg"
                alt="website logo"
                className="book-hub-login-image-small"
              />
            </Link>
          </div>
          <div>
            <button className="button-hamburger" type="button">
              <img
                className="hamburger-icon-navbar"
                src="https://res.cloudinary.com/dq8h4f4kb/image/upload/v1643817045/MiniProject/iconhamburger_icon_navbar_ysaave.svg"
                alt="hamburger"
              />
            </button>
          </div>
        </div>
        <ul className="navbar-un-order-list">
          <li className="navbar-list-items">
            <a className="" href="/">
              Home
            </a>
          </li>
          <li className="navbar-list-items">
            <a className="" href="/bookshelves">
              Bookshelves
            </a>
          </li>
          <button
            className="navbar-button-small"
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
