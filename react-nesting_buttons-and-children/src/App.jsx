import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button name="hans" />
      <Button name="fred" />
      <Button name="günter" />
      <Button name="fieda" />
    </main>
  );
}

function Button(children) {
  const { name } = children;

  return (
    <button className="button" type="button">
      {name}
    </button>
  );
}
