import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/Shared/RightNav/RightNav";

const NewsLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            <Col lg={9}>
              <Outlet />
            </Col>
            <Col lg={3}>
              <RightNav />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default NewsLayout;
