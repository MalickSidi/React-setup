import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const clickHandler = () => {
    setCount((c) => (c = c + 1));
  };

  return (
    <>
      <div className="">
        <button onClick={clickHandler}>Counter: {count}</button>
      </div>
    </>
  );
};

export { Counter };
