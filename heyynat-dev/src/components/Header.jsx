import React, { Component } from 'react';
import {Link }from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav role="navigation" aria-label="main navigation">
        <div>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/myprojects" >Projects</Link>
        </div>
      </nav>
    )
  }
}

export default Header;
