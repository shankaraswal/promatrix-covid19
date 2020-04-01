import React, { Component } from "react";
import Sitelogo from "../../Assets/Sitelogo1.jpg";
import {
  BrowserRouter as Router,
  NavLink,
  Link
} from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg'>
        <div className='container navBucket'>
          <Router>
            <NavLink className='navbar-brand' to='/'>
              <img src={Sitelogo} className='sitelogo' alt='Logo' />
            </NavLink>

            <div className='navbar-collapse collapse'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/'>
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/'>
                    Features
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/'>
                    About Us
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/'>
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <div
                class='navbar-nav ml-5 btn-group'
                role='group'
                aria-label='Basic example'>
                <Link to='/login' class='btn btn-warning'>
                  Login
                </Link>
                <Link to='register' class='btn btn-warning btnReg'>
                  Register
                </Link>
              </div>
            </div>
          </Router>
        </div>
      </nav>
    );
  }
}
