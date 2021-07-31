import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ApplyLeave from "./components/ApplyLeave";
import EditProfile from "./components/EditProfile";
import ViewLeave from "./components/ViewLeave";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/apply_leave" component={ApplyLeave} />
        <Route path="/edit_profile" component={EditProfile} />
        <Route path="/view_leave" component={ViewLeave} />
      </Router>
    </div>
  );
}

export default App;
