import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import TopBar from "./components/TopBar";
import SearchSection from "./components/SearchSection";
import { BrowserRouter, Route, Routes } from "react-router";
import Library from "./components/Library";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <SideBar />
          <Col id="main" className="pe-5 ps-0">
            <TopBar />
            <SearchSection />
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/library" element={<Library />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </Col>
        </Row>
        <Player />
      </Container>
    </BrowserRouter>
  );
}

export default App;
