import React from "react";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  return (
    <div>
      {/*LEFT SIDE OF NAVBAR*/}
      <div>Twitter</div>
      <div>Discord</div>

      {/*RIGHT SIDE OF NAVBAR*/}
      <div>About</div>
      <div>How to Mint</div>
      <div>Team</div>

      {/*CONNECT WALLET BUTTON*/}
      {isConnected ? (
        <p>Connected</p>
      ) : (
        <button onClick={connectAccount}>Connect</button>
      )}
    </div>
  );
};

export default NavBar;
