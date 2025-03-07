import { uid } from "uid";
import "./App.css";
import { ColorCard } from "./components/ColorCard";
import { themes } from "./db";
import { useState } from "react";
import { ColorCardTheme } from "./components/ColorCardTheme";

function App() {
  const firstArray = themes[0];
  const [show, setShow] = useState(false);

  function show_hide() {
    setShow(!show);
  }

  return (
    <>
      {/*Hier rufe ich einmal den Namen aus dem erten Themes Array auf und füge eine hide_show funktion zu
      die mir einen true/false toggelt*/}
      <div onClick={show_hide} className="titleName" style={{ fontSize: 25 }}>
        {firstArray.name}
      </div>

      {/*Das erste Themes Array hat ein Colors Array Länge 4 mit einträgen verschiedenen Eintargen. 
     Diese Werte übergebe ich der ColorsCard und erzeuge eine Liste darus. Zudem git es eine true/false abfage 
     die mir zwei unterschiedliche Komponenten anzeigt*/}
      {show ? (
        firstArray.colors.map((x) => (
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
    </>
  );
}

export default App;
