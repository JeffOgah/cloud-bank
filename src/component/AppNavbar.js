import React from "react";
import iLogo from "../img/cloudbank.png";
import iNotif from "../img/notification.png";
import iAvatar from "../img/avatar.png";
import { Navbar, Nav } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <header>
      <Navbar className="shadow bg-white">
        <div className="container">
          <Navbar.Brand href="/">
            <img src={iLogo} alt="cloud bank" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="#" className="mr-2 mr-lg-4">
                <img src={iNotif} />
              </Nav.Link>
              <Nav.Link href="#">
                <img src={iAvatar} alt="avatar" />
                <span className="d-none d-md-inline-block ml-2 text-dark">
                  Ezekwesili Obinna
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default AppNavbar;
