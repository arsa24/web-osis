import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { DaftarNavbar } from "../data/data-web-osis";
import LogoOsis from "../assets/logo.png";

function NavigationBar() {
  const [changeBg, setBg] = useState(false);

  const setChangeBg = () => {
    if (window.scrollY > 10) {
      setBg(true);
    } else {
      setBg(false);
    }
  };
  useEffect(() => {
    setChangeBg();
    window.addEventListener("scroll", setChangeBg);
  });
  return (
    <Navbar expand="lg" fixed="top" className={changeBg ? "active-color" : ""}>
      <Container className="navcon d-flex justify-between">
        <Navbar.Brand href="#home" className="">
          <img
            src={LogoOsis}
            alt="Logo OSIS SMK Wira Informatika Global"
            className="logo-osis"
          />
          {/* OSIS WInG */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {DaftarNavbar.map(
              (
                e: {
                  path: string;
                  teks: string;
                },
                i: number
              ) => {
                return (
                  <div key={i} className="text-center nvl py-3 py-lg-0 px-lg-4">
                    <NavLink to={e.path}>{e.teks}</NavLink>
                  </div>
                );
              }
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
