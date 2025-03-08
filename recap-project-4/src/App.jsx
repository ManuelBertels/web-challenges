import { uid } from "uid";
import "./App.css";
import { ColorCard } from "./components/ColorCard";
import { themes } from "./db";
import { useState } from "react";
import { ColorCardTheme } from "./components/ColorCardTheme";
import { ThemeFormular } from "./components/ThemeFomular";

function App() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  function inputThemeFormular(event) {
    event.preventDefault();
    const textInput = event.target.elements.text.value;
    console.log(textInput);
  }

  function show_hide() {
    setShow(!show);
  }
  function show_hide1() {
    setShow1(!show1);
  }
  function show_hide2() {
    setShow2(!show2);
  }

  return (
    <>
      <ThemeFormular formInput={inputThemeFormular} />
      <p></p>
      {/*Hier rufe ich einmal den Namen aus dem erten Themes Array auf und füge eine hide_show funktion zu
      die mir einen true/false toggelt*/}
      <div onClick={show_hide} className="titleName" style={{ fontSize: 25 }}>
        {themes[0].name}
      </div>

      {/*Das erste Themes Array hat ein Colors Array Länge 4 mit einträgen verschiedenen Eintargen. 
     Diese Werte übergebe ich der ColorsCard und erzeuge eine Liste darus. Zudem git es eine true/false abfage 
     die mir zwei unterschiedliche Komponenten anzeigt*/}
      {show ? (
        themes[0].colors.map((x) => (
          <>
            <ColorCard
              key={uid()}
              role={x.role}
              value={x.value}
              name={x.name}
            />
          </>
        ))
      ) : (
        <ColorCardTheme
          firstColor={themes[0].colors[0].value}
          secondColor={themes[0].colors[1].value}
          thirdColor={themes[0].colors[2].value}
          fourthColor={themes[0].colors[3].value}
        />
      )}

      <div onClick={show_hide1} className="titleName" style={{ fontSize: 25 }}>
        {themes[1].name}
      </div>

      {show1 ? (
        themes[1].colors.map((x) => {
          return (
            <ColorCard
              key={uid()}
              role={x.role}
              value={x.value}
              name={x.name}
            />
          );
        })
      ) : (
        <ColorCardTheme
          firstColor={themes[1].colors[0].value}
          secondColor={themes[1].colors[1].value}
          thirdColor={themes[1].colors[2].value}
          fourthColor={themes[1].colors[3].value}
        />
      )}

      <div onClick={show_hide2} className="titleName" style={{ fontSize: 25 }}>
        {themes[2].name}
      </div>

      {show2 ? (
        themes[2].colors.map((x) => {
          return (
            <ColorCard
              key={uid()}
              role={x.role}
              value={x.value}
              name={x.name}
            />
          );
        })
      ) : (
        <ColorCardTheme
          firstColor={themes[2].colors[0].value}
          secondColor={themes[2].colors[1].value}
          thirdColor={themes[2].colors[2].value}
          fourthColor={themes[2].colors[3].value}
        />
      )}
    </>
  );
}

export default App;
