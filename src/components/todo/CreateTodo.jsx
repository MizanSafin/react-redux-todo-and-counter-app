import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../redux/state/todo/todoSlice";

function CreateTodo() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <input
            type="text"
            placeholder="Add todo.."
            className="form-control"
            ref={inputRef}
          />
        </div>
        <div className="col-sm-2">
          <button
            className="btn btn-success addBtn"
            onClick={() => dispatch(AddTodo(inputRef.current.value))}
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
