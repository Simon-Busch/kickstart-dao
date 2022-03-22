import sdk from "./1-SDK.mjs";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x2d4144FD5E9b4860d8Ea101d8F798b09AC77fAEc",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to NarutoDAO!",
        image: readFileSync("src/script/assets/neon-token.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
