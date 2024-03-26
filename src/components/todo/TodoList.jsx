import React from "react";
import { useSelector } from "react-redux";
import { DeleteTodoAlert } from "./DeleteTodoAlert";
import { EditTodoAlert } from "./EditTodoAlert";

function TodoList() {
  const todoList = useSelector((state) => state.todo.value);
  console.log(todoList);
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Todo name</th>
                <th>Edit </th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((todo, i) => {
                return (
                  <tr key={i.toString()}>
                    <td>{i + 1}</td>

                    <td>{todo}</td>

                    <td>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => EditTodoAlert(i, todo)}
                      >
                        Edit
                      </button>
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => DeleteTodoAlert(i)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
