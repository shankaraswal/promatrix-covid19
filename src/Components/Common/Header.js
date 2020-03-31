import React, { Component } from "react";
import Navigation from "./Navigation";
import "./Common.css";
import Masthead from "./Masthead";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Navigation />
        <Masthead />
      </div>
    );
  }
}
