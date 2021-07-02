import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";

const ListCom = (props) => {
    return (
        <>
            <div className="todo_style">
                <span>
                    <DeleteIcon className="deleteIcon" />
                </span>
                <li style={{ textDecorationLine : 'line-through' }}>{props.text}</li>
            </div>

        </>
    );
};

export default ListCom;