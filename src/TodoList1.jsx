import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from './ListCom';


const TodoList1 = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const addItem = () => {
    console.log("addItem clicked");
    setNewItem((oldItems) => {
      return [...oldItems, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDO List </h1>
          <br />
          <input type="text" value={item} placeholder="Add an item" onChange={itemEvent} />
          <Button>
            <AddIcon className="newBtn" onClick={addItem} />
          </Button>
          <br />

          <ol>
            {newItem.map((val, index) => {
              return <ListCom key={index} text={val} /> ;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoList1;
