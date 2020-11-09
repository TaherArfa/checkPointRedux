// import logo from "./logo.svg";
import "./App.css";
// import { Container, Row, Col, InputGroup, FormControl,Button } from "react-bootstrap";
import AddItems from "./Components/AddItems";
import ListItems from "./Components/ListItems";

function App() {
  return (
    <div className="App">
      <AddItems />
      <ListItems />      
    </div>
  );
}

export default App;
