import React, { useState } from "react";

function Counter() {
  const init = 0;

  let [counter, setCounter] = useState(init);

  const incriment = () => {
    let incVal = counter+1;
    setCounter(incVal);
  };

  const decriment = () => {
    let decVal = counter-1;
    setCounter(decVal);
  };

  const reset = () => {
    setCounter(init);
  };

  return (
    <div className="counter">
      <div className="show_counter">{counter}</div>
      <button className="btn" onClick={incriment}>
        Incriment
      </button>
      <button className="btn" onClick={decriment}>
        Decriment
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
