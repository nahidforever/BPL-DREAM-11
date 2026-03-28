import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>

      <Suspense>
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
