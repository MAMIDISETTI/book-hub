import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Bookshelves from './components/Bookshelves'
import BooksDetails from './components/BooksDetails'
import Home from './components/Home'
import NotFound from './components/NotFound'

// use the below bookshelvesList for rendering read status of book items in Bookshelves Route

/* const bookshelvesList = [
  {
    id: '22526c8e-680e-4419-a041-b05cc239ece4',
    value: 'ALL',
    label: 'All',
  },
  {
    id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
    value: 'READ',
    label: 'Read',
  },
  {
    id: '2ab42512-3d05-4fba-8191-5122175b154e',
    value: 'CURRENTLY_READING',
    label: 'Currently Reading',
  },
  {
    id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
    value: 'WANT_TO_READ',
    label: 'Want to Read',
  },
] */
// https://res.cloudinary.com/dzlwkon9z/image/upload/v1644335920/1644335366517_nwbo39.jpg
// https://res.cloudinary.com/dzlwkon9z/image/upload/v1644335804/Ellipse_99_v7f23p.png
// https://res.cloudinary.com/dzlwkon9z/image/upload/v1644335789/Rectangle_1467_xgw0iu.png

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/bookshelves" component={Bookshelves} />
      <ProtectedRoute exact path="/book/:id" component={BooksDetails} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)
export default App
