import React, { Component } from 'react';
import {Link }from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav role="navigation" aria-label="main navigation">
          <Link to="/" className="link-start link-item">Home</Link>
          <Link to="/about" className="link-item">About</Link>
          <Link to="/myprojects" className="link-item">Projects</Link>
      </nav>
    )
  }
}

export default Header;
