import { useState } from "react";
import "./styles/App.scss";
import MainMint from "./MainMint";
import NavBar from "./NavBar";
import Hero from "./Hero";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <>
      <div className="app">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <Hero />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
    </>
  );
}

export default App;
