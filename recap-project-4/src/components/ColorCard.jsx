import "./colorCard.css";

export function ColorCard({ role, value, name }) {
  return (
    <>
      <div style={{ fontSize: 19 }}>{name}</div>
      <div className="colorCard" style={{ backgroundColor: value }}>
        {role}
        <p>{value}</p>
      </div>
    </>
  );
}
