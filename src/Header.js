import './Header.css'; // import the CSS file
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LocalizedStrings from 'react-localization';
import React, { useState } from 'react';

let strings = new LocalizedStrings({
    en: {
        blog: "HOME",
        about: "ABOUT",
        courses:"COURSES",
        feedback:"REVIEWS",
        team:"TEAM",
    },
    ua: {
      blog: "ГОЛОВНА",
      about: "МИ", 
      courses:"КУРСИ",
      feedback:"ВІДГУКИ",
      team:"КОМАНДА"
    },
    sk: {
      blog: "BLOG",
      about: "MY", 
      courses:"KURZY",
      feedback:"SPÄTNÁ VÄZBA",
      team:"TÍM"
    }
  });


  
function Header(props) {

    if(props.language==='en'){
        strings.setLanguage('en')
    }	else {
        strings.setLanguage('ua')
    }
  return (

    <Navbar className='nvbr' expand="lg">
    <Container>
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="nb">
          <Nav.Link className='k' href="#blog">{strings.blog}</Nav.Link>
          <Nav.Link className='k' href="#about">{strings.about}</Nav.Link>
          <Nav.Link className='k' href="#courses">{strings.courses}</Nav.Link>
          <Nav.Link className='k' href="#team">{strings.team}</Nav.Link>
          <Nav.Link className='k' href="#reviews">{strings.feedback}</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


    // <header>
    //   <nav>
    //     <ul>
    //     <li><a href="#blog">blog</a></li>
    //       <li><a href="#about">about</a></li>
    //       <li><a href="#courses">courses</a></li>

    //       <li><a href="#team">team</a></li>
    //       <li><a href="#reviews">reviews</a></li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Header;
