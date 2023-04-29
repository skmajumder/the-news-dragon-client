import React from "react";
import './RightNav.css'
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <aside>
      <div className="social-login mb-5">
        <h4 className="mb-3">Login With</h4>
        <Button
          variant="outline-info"
          className="w-100 mb-2 d-flex justify-content-center align-items-center gap-1"
        >
          <FaGoogle />
          <span>Login with Google</span>
        </Button>
        <Button
          variant="outline-secondary"
          className="w-100 mb-2 d-flex justify-content-center align-items-center gap-1"
        >
          <FaGithub />
          <span>Login with Github</span>
        </Button>
      </div>
      <div className="social-account mb-5">
        <h4 className="mb-3">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="w-100 d-flex justify-content-start align-items-center gap-1">
            <FaFacebook /> <span>Facebook</span>
          </ListGroup.Item>
          <ListGroup.Item className="w-100 d-flex justify-content-start align-items-center gap-1">
            <FaTwitter /> <span>Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item className="w-100 d-flex justify-content-start align-items-center gap-1">
            <FaInstagram /> <span>Instagram</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="q-zone p-3 rounded-1">
        <QZone />
      </div>
    </aside>
  );
};

export default RightNav;
