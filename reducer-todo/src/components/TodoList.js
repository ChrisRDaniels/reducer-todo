import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/TodoReducer";
import TodoItem from "./TodoItem";

  const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  const handleChanges = e => {
    setTodo(e.target.value);
    
  };

  const handleChanges2 = e => {
    setDate(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: "ADD_ITEM", payload: todo})
  }


  const toggleComplete = id => {
    dispatch({type: "TOGGLE_COMPLETE", payload: id})
  }

  const clearCompleted = e => {
      dispatch({type: "CLEAR_COMPLETED"})
  }

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit}>
        <label>
          Todo Item: 
          <input
            className="add-todo-item"
            type="text"
            name="todo"
            value={todo}
            onChange={handleChanges}
          />
        </label>
        <label>
          Due Date: 
        <input
          className="add-date"
          type="date"
          name="date"
          value={date}
          onChange={handleChanges2}
        />
        </label>
        <button>Add Item</button>
      </form>
      <div className='list'>
          {state.map(item => 
            <TodoItem item={item.item} id={item.id} completed={item.completed} toggleComplete={toggleComplete} date={date} /> 
          )}
      </div>
        <button onClick={clearCompleted}>Clear Completed</button> 
    </div>
  );
};

export default TodoList