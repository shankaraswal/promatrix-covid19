import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link
} from "react-router-dom";

import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Home from "./Components/Home/Home";
import Pickup from "./Components/Pickup/Pickup";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='wrapper'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/donate' component={Pickup} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
