import sharpProcess from "../../functions/sharpProcessing";
import fs from "fs";
import fileExists from "../../functions/fileExsists";

describe("Test for image processing with sharp", (): void => {
  // if this spec succeeds, there should be a new "testFile" folder in the images folder and it should have a burger300x400.jpg image
  // you can also check the properties to make sure the dimensions are correct
  it("resizes the image successfully", async () => {
    const reshapedBurger = await (
      await sharpProcess("burger", 10000, 10000)
    ).toBuffer();
    const path = "burger10000x10000.jpg";
    const testFolder = "./images/testFolder";

    try {
      if (!fs.existsSync(testFolder)) {
        fs.mkdirSync(testFolder);
      }
    } catch (err) {
      console.error(err);
    }

    fs.writeFileSync(testFolder + "/" + path, reshapedBurger);

    const testPath = `${testFolder}/${path}`;

    expect(fileExists(testPath)).toBeTruthy();
  });
});
