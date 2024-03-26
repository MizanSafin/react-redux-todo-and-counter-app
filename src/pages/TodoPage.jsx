import React from "react";
import CreateTodo from "../components/todo/CreateTodo";
import TodoList from "../components/todo/TodoList";

function TodoPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h2>Todo App</h2>
            </div>
            <div className="card-body">
              <CreateTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
