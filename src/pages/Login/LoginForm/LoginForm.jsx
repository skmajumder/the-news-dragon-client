import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";
import { useContext } from "react";

const LoginForm = () => {
  const [loginError, setLoginError] = useState("");
  const { loginUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const destination = location?.state?.from?.pathname || "/category/0";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const loginEmail = form.loginEmail.value;
    const loginPassword = form.loginPassword.value;

    loginUser(loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
        navigate(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
        setLoginError(errorCode);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2 className="text-center">Login your account</h2>
          {loginError && <p className="text-danger">{loginError}</p>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="loginEmail"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="loginPassword"
                placeholder="Password"
              />
            </Form.Group>
            <Button className="mt-3" variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
