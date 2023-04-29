import React from "react";
import "./Header.css";
import Logo from "../../../assets/logo.png";
import {
  Button,
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import moment from "moment";
import Marquee from "react-fast-marquee";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  return (
    <header className="header">
      <Container className="py-5">
        <Row className="text-center">
          <Col lg={12}>
            <img src={Logo} alt="Logo" />
            <p>
              <small>Journalism Without Fear or Favour</small>
            </p>
            <p>
              <time dateTime="">{moment().format("dddd, MMMM Do, YYYY")}</time>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="latest-news rounded-1 p-2 d-flex align-items-center justify-content-between">
              <Button variant="danger" className="rounded-0">
                Danger
              </Button>
              <Marquee pauseOnHover={true} speed={70}>
                I can be a React component, multiple React components, or just
                some text.
              </Marquee>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={12}>
            <NavMenu />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
