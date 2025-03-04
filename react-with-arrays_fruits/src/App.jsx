import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "1",
      name: "Banana",
      color: "yellow",
    },
    {
      id: "2",
      name: "Apple",
      color: "green",
    },
    {
      id: "3",
      name: "Peach",
      color: "orange",
    },
    {
      id: "4",
      name: "Cherry",
      color: "red",
    },
    {
      id: "5",
      name: "Tomato",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map((elements) => {
        return (
          <Card name={elements.name} key={elements.id} color={elements.color} />
        );
      })}
    </div>
  );
}
