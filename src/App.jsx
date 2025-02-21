import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import SideBar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import TopBar from "./components/TopBar";

function App() {
  return (
    <Container fluid>
      <Row>
        <SideBar />
        <div id="main">
          <TopBar />
          <Main />
        </div>
      </Row>
      <Player />
    </Container>
  );
}

export default App;
