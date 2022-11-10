// import all necessary modules, packages, and functions
import { Request, Response, NextFunction } from "express";
import fileExists from "./fileExsists";
import path from "path";
import sharpProcess from "./sharpProcessing";
import fs from "fs";
import validateParameters from "./validateParameters";

// process input and then display the appropriate result
async function processInput(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { filename, width, height } = req.query;
  const filenamee = filename as unknown as string;
  const widthh: number | string | null = (typeof width === "string" || typeof width === "number") ? width : null;
  const heightt: number | string | null = (typeof height === "string" || typeof height === "number") ? height : null;

  // validate input parameters
  const validationResult = validateParameters(filenamee, widthh, heightt);

  // make actions based on the result
  if ((await validationResult) !== "all good") {
    if ((await validationResult) === "image doesnt exist") {
      res.send("Please enter a valid name for (filename) parameter.");
    } else if ((await validationResult) === "width&height = null") {
      const imgPath = `${filenamee}.jpg`;
      res.sendFile(`${imgPath}`, { root: path.join("./images") });
    } else if ((await validationResult) === "width wrong") {
      res.send(
        "Please enter a width parameter. Make sure that it's a positive number and that the spelling is right!"
      );
    } else if ((await validationResult) === "height wrong") {
      res.send(
        "Please enter a height parameter. Make sure that it's a positive number and that the spelling is right!"
      );
    }

    //if everything is okay, display the picture with the required measurments
  } else {
    // make a new path for the new image with the measurements specified
    const imgPath = `${filenamee}${widthh}x${heightt}.jpg`;

    // if it already exists, simply display it
    if (await fileExists(path.join("./images/", imgPath))) {
      res.sendFile(`${imgPath}`, { root: path.join("./images") });

      // if it doesn't exist:
    } else {
      // resize the image and save it to a new object
      const newImg = await (
        await sharpProcess(filenamee, widthh, heightt)
      ).toBuffer();

      // check if thumbnails folder exists, if not, make a new one
      const thumbnails = "./images/thumbnails";

      try {
        if (!fs.existsSync(thumbnails)) {
          fs.mkdirSync(thumbnails);
        }
      } catch (err) {
        console.error(err);
      }

      // add the resized picture to the folder with the new path
      fs.writeFileSync(thumbnails + "/" + imgPath, newImg);

      // finally, display the image
      res.sendFile(`${imgPath}`, { root: path.join("./images/thumbnails") });
    }
  }

  // go to the next middleware
  next();
}

// export processInput to be used in images.ts
export default processInput;
