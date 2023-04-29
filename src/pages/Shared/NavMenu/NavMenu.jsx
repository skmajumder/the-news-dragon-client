import React from "react";
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavMenu = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSignout = () => {
    logout()
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="main-menu">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto text-center">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center gap-3">
              {user && (
                <div>
                  <FaUserCircle className="fs-3" />
                </div>
              )}
              {user ? (
                <>
                  <Button onClick={handleSignout} className="btn btn-dark">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to={"/login"} className="btn btn-dark">
                    Login
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;
