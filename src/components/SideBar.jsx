import { Button, Col, Container, Form, Image, InputGroup, Nav, Navbar, NavLink } from "react-bootstrap";
import Logo from "../assets/logo/logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { searchSongAction } from "../redux/actions";
import { useState } from "react";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <Col className="col col-2">
      <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <Image src={Logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul>
                <Nav.Link className="nav-item nav-link d-flex align-items-center" href="#">
                  <HouseDoorFill></HouseDoorFill>&nbsp;Home
                </Nav.Link>
                <Nav.Link className="nav-item nav-link d-flex align-items-center" href="#">
                  <BookFill></BookFill>&nbsp; Your Library
                </Nav.Link>
                <InputGroup className="mt-3">
                  <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Button
                    className="btn-outline-secondary bg-transparent btn-sm"
                    onClick={() => {
                      dispatch(searchSongAction(search));
                    }}
                  >
                    GO
                  </Button>
                </InputGroup>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn d-flex flex-column mx-auto">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <div className="d-flex mx-auto">
            <NavLink href="#" className="me-1">
              Cookie Policy
            </NavLink>
            |
            <NavLink href="#" className="ms-1">
              Privacy
            </NavLink>
          </div>
        </div>
      </Navbar>
    </Col>
  );
};

export default SideBar;
