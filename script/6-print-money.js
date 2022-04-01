import sdk from "./1-SDK.js";

// Address of the token, obtained in step5
const token = sdk.getToken("0xFCA1aC6b65434e00C0e4C60a5fAa1C64C4eAE1Cd");

(async () => {
  try {
    // max supply of the token ?
    const amount = 100_000_000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$KGT in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();