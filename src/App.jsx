import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FormPage from "./pages/Form";
import UsersData from "./pages/Users";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Form />
      <div style={{ width: "100%" }}>
        <Navbar />
        <Switch>
          <Route exact path="/users">
            <UsersData />
          </Route>
          <Route exact path="/form">
            <FormPage />
          </Route>
          <Redirect to="/users" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
