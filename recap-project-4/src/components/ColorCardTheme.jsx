import "./ColorCardTheme.css";

export function ColorCardTheme({
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
}) {
  return (
    <>
      <div className="container">
        <div
          className="subcontainer"
          style={{ backgroundColor: firstColor }}
        ></div>
        <div
          className="subcontainer"
          style={{ backgroundColor: secondColor }}
        ></div>
        <div
          className="subcontainer"
          style={{ backgroundColor: thirdColor }}
        ></div>
        <div
          className="subcontainer"
          style={{ backgroundColor: fourthColor }}
        ></div>
      </div>
    </>
  );
}
