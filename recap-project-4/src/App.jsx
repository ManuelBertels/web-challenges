import { uid } from "uid";
import "./App.css";
import { ColorCard } from "./components/ColorCard";
import { themes } from "./db";

function App() {
  const firstArray = themes[0];

  return (
    <>
      {/*Hier rufe ich einmal den Namen aus dem erten Themes Array auf */}
      <div className="titleName" style={{ fontSize: 25 }}>
        {firstArray.name}
      </div>

      {/*Das erste Themes Array hat ein Colors Array Länge 4 mit einträgen verschiedenen Eintargen. 
     Diese Werte übergebe ich der ColorsCard und erzeuge eine Liste darus. */}
      {firstArray.colors.map((x) => (
        <>
          <ColorCard key={uid()} role={x.role} value={x.value} name={x.name} />
        </>
      ))}
    </>
  );
}

export default App;
