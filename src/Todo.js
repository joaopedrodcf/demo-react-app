import React from 'react';

const Todo = props => {
    return(
        <li onClick={props.ToggleDone} value={props.item.id}>
            {props.item.name}
        </li>
    );
}

export default Todo;