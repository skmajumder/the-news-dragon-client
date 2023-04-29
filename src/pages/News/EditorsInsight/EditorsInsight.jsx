import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaRegCalendar } from "react-icons/fa";

const EditorsInsight = () => {
  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  <FaRegCalendar />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default EditorsInsight;
