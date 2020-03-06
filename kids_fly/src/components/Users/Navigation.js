import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" light>
        <NavbarBrand href="/" className="mr-auto">
          {/* <img src='../images/logo.jpg' alt='plane'></img> */}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar >
            <NavItem>
              <Link to="/signup">Sign-up</Link>
            </NavItem>
            <NavItem>
              <Link to="/Login">Log-in</Link>
            </NavItem>
            <NavItem>
              <Link to="/booking">Bookings</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
