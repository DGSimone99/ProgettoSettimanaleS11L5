import { Button, Col, Container, Form, Image, InputGroup, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/logo/logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { searchSongAction, selectSongAction } from "../redux/actions";
import { useState } from "react";
import { NavLink } from "react-router";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const library = useSelector((state) => state.library.content || []);

  return (
    <Col xs={2} className="ps-0 me-md-5 me-xl-4">
      <Navbar expand="md" variant="dark" id="sidebar">
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
                <NavLink
                  to="/"
                  className="nav-item nav-link d-flex align-items-center"
                  onClick={() => {
                    dispatch(searchSongAction(""));
                    setSearch("");
                  }}
                >
                  <HouseDoorFill></HouseDoorFill>&nbsp;Home
                </NavLink>
                <NavLink to="/library" className="nav-item nav-link d-flex align-items-center">
                  <BookFill></BookFill>&nbsp; Your Library
                </NavLink>
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
          <hr className="w-75 text-white mx-auto"></hr>
        </Container>

        <Container className="d-flex flex-column justify-content-start align-items-start">
          {library.slice(0, 6).map((song) => (
            <NavLink
              className="text-secondary nav-link my-2 sideBarSong"
              key={song.id}
              onClick={() => {
                dispatch(selectSongAction(song));
              }}
            >
              {song.title_short}
            </NavLink>
          ))}
        </Container>
        <div className="nav-btn d-flex flex-column mx-auto mt-auto">
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
