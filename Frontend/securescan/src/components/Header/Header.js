import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AuthContext from "../../auth/auth-context";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import "./Header.css";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLogged = authCtx.isLoggedIn;
  //const isAdmin = authCtx.isAdmin;

  return (
    <Navbar expand="lg" className="gap-5 px-5">
      <Link to={"/"} className="navbar-link">
        <Navbar.Brand>
          <img
            alt=""
            src="/SecureScan-NoBackground.png"
            width="25"
            height="27"
            className="d-inline-block align-top font-logo"
          />{" "}
          SecureScan
        </Navbar.Brand>
      </Link>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="justify-content-end align-items-center"
          style={{ width: "100%" }}
        >
          {isLogged ? (
            <>
              <Nav className="underline-animation">
                <Nav.Link as={Link} to="/active_engines">
                  Active Engines
                </Nav.Link>
                <Nav.Link as={Link} to="/my_scans">
                  My Scans
                </Nav.Link>
              </Nav>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link to={`/login`}>
                <LoginButton />
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
