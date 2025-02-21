import { Col, Container, Nav, Row } from "react-bootstrap";

const TopBar = () => {
  return (
    <Container className="mb-4">
      <Row className="d-flex">
        <Col className="mainLinks d-none d-md-flex">
          <Nav.Link href="#">TRENDING</Nav.Link>
          <Nav.Link href="#">PODCAST</Nav.Link>
          <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
          <Nav.Link href="#">NEW RELEASES</Nav.Link>
          <Nav.Link href="#">DISCOVER</Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
