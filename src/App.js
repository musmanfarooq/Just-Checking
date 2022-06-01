import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import NavMenu from "./Component/NavMenu";
import { Button } from "bootstrap";
import MyDetail from "./Component/MyDetail";

function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Container>
        <MyDetail/>
      </Container>
    </div>
  );
}

export default App;
