
import sdk from "./1-SDK.js";

// Address of ERC-1155 membership NFT contract.
const editionDrop = sdk.getEditionDrop("0x833B36fBDD417957f87C1682Ffd40a9AAB2372F3");
const token = sdk.getToken("0x8Ee82768B7C460A494162D5e0F40740d23a358Fe");

(async () => {
  try {
    // Grab all the addresses of people who own our membership NFT, 
    // which has a tokenId of 0.
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);

    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
      );
      process.exit(0);
    }

    // Loop through the array of addresses.
    const airdropTargets = walletAddresses.map((address) => {
      // Pick a random # between 1000 and 10000.
      const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      // Set up the target.
      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      // during the airdrop, random amount will be sent to the addresses who own
      // membership NFT but the rest of it will be sent to the address of the creator !

      return airdropTarget;
    });

    // Call transferBatch on all our airdrop targets.
    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();

//!! NB if re-run script, will airdrop AGAIN to all addresses
// TODO make a script that airdrop to new addreses only