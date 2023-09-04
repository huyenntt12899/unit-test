import React, { useState } from "react";

export function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((pre) => pre + 1);
  };

  const decrement = () => {
    setCount((pre) => pre - 1);
  };

  const restart = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount((pre) => pre * -1);
  };
  return (
    <div>
      <h1>
        Count: <h3 data-testid="count">{count}</h3>
      </h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Signs</button>
      </div>
    </div>
  );
}
