import React, { useReducer } from 'react'
import { initialState, reducer } from "../reducers/TodoReducer";

export default function TodoItem(props) {
    console.log("props for todo item", props)

    return (
        <div onClick={() => props.toggleComplete(props.id)}>
           <h3 className={props.completed === true ? "completed" : "todo"}>{props.item}</h3>
        </div>
    )
}