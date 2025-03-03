export function Boxes(props) {
  const { color1, color2, color3 } = props;
  return (
    <>
      <div className="container">
        <div className="box" style={{ backgroundColor: color1 }}></div>
        <div className="box" style={{ backgroundColor: color2 }}></div>
        <div className="box" style={{ backgroundColor: color3 }}></div>
      </div>
    </>
  );
}
