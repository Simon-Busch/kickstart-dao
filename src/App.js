import { useAddress, useMetamask, useEditionDrop } from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // Use the connectWallet hook thirdweb gives us.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  let connection;
  if (!address) {
    connection =  (
      <>
        <h1>Welcome to KickStart DAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </>
    );
  } else {
    connection = (
      <h1>👀 wallet connected</h1>
    )
  }

  // Initialize our editionDrop contract
  const editionDrop = useEditionDrop("0x833B36fBDD417957f87C1682Ffd40a9AAB2372F3");
  // State variable for us to know if user has our NFT.
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);

  useEffect(() => {
    // If they don't have an connected wallet, exit!
    if (!address) {
      return;
    }

    const checkBalance = async () => {
      try {
        const balance = await editionDrop.balanceOf(address, 0);
        if (balance.gt(0)) {
          setHasClaimedNFT(true);
          console.log("🌟 this user has a membership NFT!");
        } else {
          setHasClaimedNFT(false);
          console.log("😭 this user doesn't have a membership NFT.");
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Failed to get balance", error);
      }
    };
    checkBalance();
  }, [address, editionDrop]);
  
  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="app-container">
      {connection}
    </div>);
};

export default App;