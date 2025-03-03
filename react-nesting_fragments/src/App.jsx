import React from "react";
import "./styles.css";
import Box from "./components/Box";
import { Boxes } from "./components/Boxes";

export default function App() {
  return (
    <main>
      <Boxes color1="#007bff" color2="#fc3" color3="#ff3333" />
    </main>
  );
}
