import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import {DaftarNavbar} from '../data/data-web-osis.js'

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="navcon">
        <Navbar.Brand href="#home" className="fw-bold">OSIS WInG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
                DaftarNavbar.map((e,i) => {
                return (
                  <div key={i} className="text-center nvl py-2 py-lg-0">
                    <NavLink to={e.path}>{e.teks}</NavLink>
                  </div>
                  )
                })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;