import React from "react";
import { decreaseCount, increaseCount } from "../redux/actions/CounterActions";
import { useDispatch, useSelector } from "react-redux";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const reduxCount = useSelector((state) => state.counterReducer.count);

  return (
    <div className="redux-counter">
      <p>This is a React-Redux counter</p>
      <div className="card">
        <div>
          <button>count is {reduxCount}</button>
        </div>
        <button onClick={() => dispatch(increaseCount(reduxCount))}>
          Increase Count
        </button>
        <button onClick={() => dispatch(decreaseCount(reduxCount))}>
          Decrease Count
        </button>
      </div>
    </div>
  );
};

export default ReduxCounter;
