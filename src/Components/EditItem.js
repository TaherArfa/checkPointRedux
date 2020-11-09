import React, { useState } from "react";
import { Modal, Button,FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux"

import { editTask} from "../JS/Actions/actionTask"



const EditItem = ({item}) => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(item.text)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={edit}
            onChange={(e)=>setEdit(e.target.value)}


          />
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{handleClose(); setEdit(item.text)}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {handleClose(); dispatch(editTask({id:item.id, text: edit, isDone: item.isDone}))}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditItem;
