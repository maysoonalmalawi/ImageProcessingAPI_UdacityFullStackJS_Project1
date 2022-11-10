import sharp from "sharp";

// create a function to process the images using the name and height and width
async function sharpProcess(
  filename: string,
  width: number | string |  null,
  height: number | string |  null
): Promise<sharp.Sharp> {
  // parse height and width into numbers
  width = Number(width);
  height = Number(height);
  // use the name to make a temp object to store the original picture in as to not make any changes on it
  const temp = `images/${filename}.jpg`;
  // resize the image and return it
  return sharp(temp).resize(width, height);
}

// export sharpProcess to be used in processInput.ts and also in unit testing
export default sharpProcess;
