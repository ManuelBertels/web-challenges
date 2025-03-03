import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

import { Header } from "./Components/Header";

export default function App() {
  return (
    <>
      <Header bild1={logo} bild2={avatar} />
      <main>content goes here…</main>
    </>
  );
}
