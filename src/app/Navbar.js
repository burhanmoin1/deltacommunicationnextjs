'use client';
import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Navbar.css';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function DeltaNavbar() {

  const handleServicesClick = () => {
    let scrollAmount = 1400;
    if (window.innerWidth <= 767.98) {
      scrollAmount = 700;
    }
    window.scrollTo({
      top: window.scrollY + scrollAmount,
      behavior: 'smooth'
    });
  };

  const [isOpen, setOpen] = useState(false);
  const handlePhoneClick = () => {
    // Use the tel: protocol to initiate a phone call
    window.location.href = 'tel:+923463637743'; // Replace with your phone number
  };

  const handleEmailClick = () => {
    // Use the mailto: protocol to open the default email client
    window.location.href = 'mailto:burhandeltacn@gmail.com'; // Replace with your email address
  };
  return (
    <Navbar expand="lg" className="bg-white">
      <Container className='Nav-bg'>
        <Navbar.Brand href="/">
          <Image src={logo.src} className='dcn-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger-container">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.2}
          className="hamburger-icon"
        />
      </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className='cursor-link'>
          <Link href="/" className="nav-link">Home</Link> {/* Add a specific class to the "Home" link */}
            </Nav.Link>
            <Nav.Link className='cursor-link'>
              <Nav onClick={handleServicesClick} className="nav-link">Services</Nav> {/* Add a specific class to the "Home" link */}
            </Nav.Link>
            <Nav.Link className='cursor-link'>
              <Nav href="/support" className="nav-link">Support</Nav> {/* Add a specific class to the "Home" link */}
            </Nav.Link>
            <Nav.Link className='cursor-link'>
              <Nav href="/aboutus" className="nav-link">About Us</Nav> {/* Add a specific class to the "Home" link */}
            </Nav.Link>
            <Link href="/signup">
              <Button variant="dark" className="register-button">
                Register with Delta
              </Button>
            </Link>
          </Nav>
          {/* Icons for phone and email */}
          <div className="icon-container">
            <FontAwesomeIcon className='icons' icon={faPhone} onClick={handlePhoneClick} /> {/* Phone icon */}
            <FontAwesomeIcon className='icons' icon={faEnvelope} onClick={handleEmailClick} /> {/* Email icon */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DeltaNavbar;
