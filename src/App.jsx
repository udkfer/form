import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import FormPage from './pages/Form'
import UsersData from './pages/Users'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/users">
          <UsersData />
        </Route>
        <Route exact path="/form">
          <FormPage />
        </Route>
        <Route exact path="/home">
          <h1>DaBussy</h1>
        </Route>
        <Redirect to="/home" />
      </Switch>
    </Router>
  )
}

export default App
