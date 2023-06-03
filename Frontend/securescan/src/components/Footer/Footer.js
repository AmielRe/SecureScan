import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../auth/auth-context";
import "./Footer.css";

const Footer = () => {
  const authCtx = useContext(AuthContext);
  const isLogged = authCtx.isLoggedIn;

  return (
    <div className="footer-wrapper">
      <ul className="list-inline">
        <Link
          className="list-inline-item"
          to={"/"}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Home
        </Link>
        {isLogged ? (
          <Link className="list-inline-item" to={"/my_scans"}>
            My Scans
          </Link>
        ) : (
          <Link className="list-inline-item" to={"/login"}>
            Login
          </Link>
        )}
      </ul>
      <p className="copyright">SecureScan © 2023</p>
    </div>
  );
};

export default Footer;
