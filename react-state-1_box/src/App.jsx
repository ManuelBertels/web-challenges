import { useState } from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  const [isActive, setIsActive] = useState(false);

  let name = "";

  if (isActive) {
    name = "box--active";
  } else {
    name = "box";
  }

  return (
    <main>
      <div className={name} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
