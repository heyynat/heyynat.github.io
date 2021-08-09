import React from 'react';
import { Link }from 'react-router-dom';

// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   const nav = document.getElementsByTagName("nav");
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     nav.style.opacity = '0.5';
//   } else {
//     nav.style.opacity = '1';
//   }
// }

const Header = () => {
  return (
      <nav role="navigation" aria-label="main navigation">
          <Link to="/" className="link-start link-item">Home</Link>
          <Link to="/about" className="link-item">About</Link>
          <Link to="/myprojects" className="link-item">Projects</Link>
      </nav>
    );
};

export default Header;
