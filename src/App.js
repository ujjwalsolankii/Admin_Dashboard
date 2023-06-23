import React from "react";
import "./app.css"
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

function App() {
  return (
    <Router>
      <Topbar/>
      <div  className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={()=><Home />} />
          <Route exact path="/users" component={()=><UserList />} />
          <Route exact path="/user/:userId" component ={()=><User/>}/>
          {/* <Route exact path="/" component={Home} />
          <Route path="/users" component={UserList} />
          <Route path="/user/:userId" component={User} /> */}
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
