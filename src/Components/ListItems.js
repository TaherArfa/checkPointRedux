import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { checkTask, deleteTask} from "../JS/Actions/actionTask"
import EditItem from "./EditItem";


const ListItems = () => {
  const Items = useSelector((state) => state.listItems);
 const  dispatch = useDispatch()


  return (
    <div>
      <ListGroup>
        {Items.map((item, key) => (
          <ListGroup.Item
            key={key}
            
          >
            <div style={{
                display:"flex",alignItems:"flex-end",
                justifyContent:"space-around",width: "46%"
            }}>
              <Button variant="secondary" onClick={()=> dispatch(checkTask(item.id))}>{item.isDone?"isDone": "UnDone"}</Button>
              {/* <Button variant="primary">Edit</Button> */}
              <EditItem item={item} />
              <Button
                variant="danger"
                onClick={() => dispatch(deleteTask(item.id))}
              >
                Delete
              </Button>

              <p style={{ margin: "0px" }} className={item.isDone?"check":""}>{item.text}</p>
            </div>
          
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListItems;
