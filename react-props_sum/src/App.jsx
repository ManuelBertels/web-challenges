export default function App() {
  return <Sum a={4} b={4} />;
}

function Sum(props) {
  const { a, b } = props;
  let result;
  return (
    <>
      <section>Die Summe ist {(result = a + b)}</section>
    </>
  );
}
