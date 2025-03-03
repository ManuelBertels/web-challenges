export function Header(props) {
  const { bild1, bild2 } = props;
  return (
    <>
      {" "}
      <header className="header">
        <a href="#">
          <img className="round-image" src={bild1} alt="logo" />
        </a>
        <nav>
          <a className="navigation__link" href="#home">
            Home
          </a>
          <a className="navigation__link" href="#about">
            About
          </a>
          <a className="navigation__link" href="#impressum">
            Impressum
          </a>
        </nav>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={bild2} alt="avatar" />
        </button>
      </header>{" "}
    </>
  );
}
