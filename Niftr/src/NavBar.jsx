import "./NavBar.css";

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
    <div className="nav">
      {/*LEFT SIDE OF NAVBAR*/}
      <div className="nav__left">
        <div>About</div>
        <div>How to Mint</div>
        <div>Team</div>
      </div>
      {/*RIGHT SIDE OF NAVBAR*/}
      <div className="nav__right">
        {/*CONNECT WALLET BUTTON*/}
        {isConnected ? (
          <p>Connected</p>
        ) : (
          <button onClick={connectAccount}>Connect</button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
