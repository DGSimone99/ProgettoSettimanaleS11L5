import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import SideBar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import TopBar from "./components/TopBar";
import SearchSection from "./components/SearchSection";
import { BrowserRouter, Route, Routes } from "react-router";
import Library from "./components/Library";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <SideBar />
          <div id="main">
            <TopBar />
            <SearchSection />
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/library" element={<Library />}></Route>
            </Routes>
          </div>
        </Row>
        <Player />
      </Container>
    </BrowserRouter>
  );
}

export default App;
