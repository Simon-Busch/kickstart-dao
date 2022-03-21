import { useEffect, useMemo, useState } from "react";

// import thirdweb
import { useWeb3 } from "@3rdweb/hooks";
import './App.css';

const App = () => {
  // Use the connectWallet hook thirdweb gives us.
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address)

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  let connection;
  if (!address) {
    connection =  (
      <>
        <h1>Welcome to KickStart DAO</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet
        </button>
      </>
    );
  } else {
    connection = (
      <h1>👀 wallet connected</h1>
    )
  }
  
  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="app-container">
      {connection}
    </div>);
};

export default App;