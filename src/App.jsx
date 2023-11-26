import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UsersData from "./pages/Users";
import Posts from "./pages/Posts";
import UserInfo from "./pages/UserInfo";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import PostForm from "./components/PostForm";

function App() {
  return (
    <Router>
      <Form />
      <PostForm />
      <div style={{ width: "100%" }}>
        <Navbar />
        <Switch>
          <Route exact path="/users">
            <UsersData />
          </Route>
          <Route exact path="/users/:id">
            <UserInfo />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Redirect to="/users" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
