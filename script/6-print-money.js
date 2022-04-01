import sdk from "./1-SDK.js";

// Address of the token, obtained in step5
const token = sdk.getToken("0x8Ee82768B7C460A494162D5e0F40740d23a358Fe");

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
