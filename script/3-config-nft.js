import sdk from "./1-SDK.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x833B36fBDD417957f87C1682Ffd40a9AAB2372F3");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "The Neon Token",
        description: "This NFT will give you access to Kickstart DAO!",
        image: readFileSync("script/assets/neon-token.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
