import { Button, Col } from "react-bootstrap";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <Col className="mainPage pt-5 h-100">
      <div className="d-flex my-auto align-items-center text-center justify-content-center flex-column h-50">
        <h1 className="text-white">Pagina non trovata.</h1>
        <Button as={Link} to="/" className="bg-transparent border-white mt-5">
          Torna alla Home
        </Button>
      </div>
    </Col>
  );
};

export default PageNotFound;
