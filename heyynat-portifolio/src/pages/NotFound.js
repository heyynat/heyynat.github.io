import React from 'react';
import { Nav } from 'react-bootstrap';
const NotFound = () => {
  return (
    <div class="d-flex justify-content-center align-items-center" id="main">
        <h1 class="mr-3 pr-3 align-top border-right inline-block align-content-center text-white">404</h1>
        <div class="inline-block align-middle">
          <h2 class="font-weight-normal lead text-white" id="desc">A página que você requisitou não foi encontrada.</h2>
        </div>
        <Nav className="justify-content-center text-white">
          <Nav.Item>
            <Nav.Link target="_blank" href="/"><mark style={{backgroundColor: "#ccff33"}}>Home</mark></Nav.Link>
          </Nav.Item>
        </Nav>
    </div>
  );
}

export default NotFound;
