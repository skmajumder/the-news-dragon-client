import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "./pages/Shared/LeftNav/LeftNav";
import RightNav from "./pages/Shared/RightNav/RightNav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <Row>
            <Col lg={3}>
              <LeftNav />
            </Col>
            <Col lg={6}>
              <Outlet/>
            </Col>
            <Col lg={3}>
              <RightNav />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
