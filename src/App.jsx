import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();

  const [coin, setCoin] = useState(5000);
  return (
    <>
      <Navbar coin={coin}></Navbar>

      <Suspense>
        <Players
          playerPromise={playerPromise}
          coin={coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>
    </>
  );
}

export default App;
