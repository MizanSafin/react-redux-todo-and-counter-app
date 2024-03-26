import Swal from "sweetalert2";
import { EditTodo } from "../../redux/state/todo/todoSlice";
import store from "../../redux/store/store";

export const EditTodoAlert = (i, todo) => {
  Swal.fire({
    input: "text",
    inputValue: todo,
    inputValidator: (value) => {
      if (value) {
        store.dispatch(EditTodo({ index: i, task: value }));
      }
    },
  });
};
