import React, { useContext } from "react";
import { CounterContext, decreaseBy2, increaseBy2 } from "../CounterContex";

const ContextCounter = () => {
  //   const contextCount = useContext(CounterContext);
  const { refrees } = useContext(CounterContext);
  const { contextCount } = useContext(CounterContext);
  const { dispatch } = useContext(CounterContext);
  console.log(refrees);
  console.log(contextCount);
  return (
    <>
      <div className="context-counter">
        <p>This is a React-Context counter</p>
        <div>
          <button>count is {contextCount}</button>
        </div>
        <button onClick={() => dispatch(increaseBy2(contextCount))}>
          Increase Count By 2
        </button>
        <button onClick={() => dispatch(decreaseBy2(contextCount))}>
          Decrease Count By 2
        </button>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
};

export default ContextCounter;
