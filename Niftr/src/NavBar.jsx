import "./styles/NavBar.scss";

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
      <div className="nav__left">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
      </div>
      <div className="nav__right">
        {/*CONNECT WALLET BUTTON*/}
        {isConnected ? (
          <p className="connected-text">Connected</p>
        ) : (
          <button className="btn-connect" onClick={connectAccount}>
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
