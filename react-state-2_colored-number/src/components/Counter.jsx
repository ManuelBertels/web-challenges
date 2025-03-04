import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [value, setValue] = useState(0);

  function upNumber() {
    setValue(value + 1);
  }

  function downNumber() {
    setValue(value - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          onClick={upNumber}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={downNumber}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
