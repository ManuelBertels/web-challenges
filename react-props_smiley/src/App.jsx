export default function App() {
  function schnur() {
    return "scnurrrrr";
  }

  return <HappyOrNot stimmung="happy" onSchnurrr={schnur} />;
}

function HappyOrNot(props) {
  const { stimmung, onSchnurrr } = props;

  if (stimmung === "happy") {
    return (
      <>
        <section>hi hi{onSchnurrr()}</section>
      </>
    );
  } else {
    return (
      <>
        <section>im not happy</section>
      </>
    );
  }
}
