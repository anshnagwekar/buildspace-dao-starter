import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x02BB7b02E92F601606C201f64554e748232888e1");

(async () => {
  try {
    const res = await editionDrop.createBatch([
      {
        name: "Da Fine Cow",
        description: "This NFT will give you access to DspDAO!",
        image: readFileSync("scripts/assets/cowIsFine.png"),
      },
    ]);
    console.log(res);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();