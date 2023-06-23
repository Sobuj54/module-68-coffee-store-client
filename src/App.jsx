import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCards from "./components/CoffeeCards";

function App() {
  const coffees = useLoaderData();

  return (
    <div className="m-20">
      <h1 className="text-6xl text-center font-bold mb-10 text-purple-400">
        Hot Hot Coffee {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-7">
        {coffees.map((coffee) => (
          <CoffeeCards key={coffee._id} coffee={coffee}></CoffeeCards>
        ))}
      </div>
    </div>
  );
}

export default App;
