import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import FormPage from './pages/Form'
import UsersData from './pages/Users'
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <div style={{ width:"100%" }} >
      <Navbar />
      <Switch>
        <Route exact path="/users">
          <UsersData />
        </Route>
        <Route exact path="/form">
          <FormPage />
        </Route>
        <Route exact path="/home">
          <h1>A place known as '/home'</h1>
        </Route>
        <Redirect to="/home" />
      </Switch>
      </div>
    </Router>
  )
}

export default App
