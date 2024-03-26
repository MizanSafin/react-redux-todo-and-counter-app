import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../redux/state/counter/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="card my-5">
      <div className="card-header">
        <h3>Counter App</h3>
      </div>
      <div className="card-body my-2">
        <h2 className="m-2 display-2 font-extrabold">{count}</h2>
        <div className="my-3">
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-success"
          >
            Increase
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-danger mx-3"
          >
            Decrease
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="btn btn-danger my-2"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
