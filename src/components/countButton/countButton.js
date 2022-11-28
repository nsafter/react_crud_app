import { useState } from "react";

const CountButton = () => {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter((count) => count + 1);
  }

  function decrease() {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  }

  return (
    <>
      <div className="counter">
        <button className="control_btn" onClick={increase}>
          +
        </button>
        <span className="counter_output">{counter}</span>
        <button className="control_btn" onClick={decrease}>
          -
        </button>
      </div>
    </>
  );
};

export default CountButton;
