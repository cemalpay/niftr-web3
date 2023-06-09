import { useState } from "react";
import "./styles/App.scss";
import MainMint from "./MainMint";
import NavBar from "./NavBar";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <>
      <div className="app">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
    </>
  );
}

export default App;
