import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import {addTask} from "../JS/Actions/actionTask"

function AddItems() {
  const [myinput, setMyinput] = useState("");
  const dispatch = useDispatch()
  console.log("myinput", myinput);

  const add = ()=> {
      if (myinput){
        dispatch(addTask({text : myinput,  id : Math.random(), isDone : false}));
        setMyinput("")
      }else {
          alert("Empty InPut");
      }
  
  };

  return (
    <div>
      {/* <header className="App-header"> */}
        <Container>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Add New Task
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(e) => setMyinput(e.target.value)}
                  value={myinput}
                />
                <InputGroup.Append>
                  <Button variant="warning" onClick={add}>Button</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      {/* </header> */}
    </div>
  );
}

export default AddItems;
