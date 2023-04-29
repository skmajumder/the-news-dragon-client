import React, { useState } from "react";
import { useContext } from "react";
import { Container, Row, Col, Form, Button, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const RegisterForm = () => {
  const [registerError, setRegisterError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleTermsAndCondition = (e) => {
    setAccepted(e.target.checked);
  };

  const handleRagister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.registerName.value;
    const photoUrl = form.registerPhoto.value;
    const email = form.registerEmail.value;
    const password = form.registerPassword.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setRegisterError(errorMessage);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2 className="text-center">Register your account</h2>
          {registerError && <p className="text-danger">{registerError}</p>}
          <Form onSubmit={handleRagister}>
            <Form.Group controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="registerName"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group controlId="photoUrl">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="registerPhoto"
                placeholder="Enter photo URL"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="registerEmail"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="registerPassword"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="acceptTerms" className="my-3">
              <Form.Check
                onClick={handleTermsAndCondition}
                type="checkbox"
                label={
                  <>
                    Accept <Link to={"/terms"}>Terms & Conditions</Link>
                  </>
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
              Register
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
