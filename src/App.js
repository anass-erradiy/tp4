import { useState } from "react";
import Client from "./components/Clints";
import "./styles.css";

export default function App() {
  const [current, setCurrent] = useState(0);
  const clients = [
    { nom: "ALAMI", prenom: "Ali", age: "22" },
    { nom: "HAMDI", prenom: "Rabiaa", age: "33" },
    { nom: "MAHDI", prenom: "Amine", age: "31" }
  ];

  const precedent = () => {
    if (current === 0) {
      return;
    }
    setCurrent(current - 1);
  };
  const Suivant = () => {
    if (current === clients.length - 1) {
      return;
    }
    setCurrent(current + 1);
  };
  return (
    <div className="App">
      <Client user={clients[current]} /> <br />
      <button onClick={precedent}>Precedent</button>
      <button onClick={Suivant}>Suivant</button>
    </div>
  );
}
