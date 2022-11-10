import path from "path";
import fileExists from "./fileExsists";

// function to validate the parameters
async function validateParameters(
  filenamee: string,
  widthh: number | string | null,
  heightt: number | string | null
): Promise<string> {

  // check if the filename exists
  const imgPath = `${filenamee}.jpg`;
  if (!(await fileExists(path.join("./images/", imgPath)))) {
    return "image doesnt exist";
  } else {
    // if it does exist, validate the height and width
    if (widthh === null && heightt === null) {
      return "width&height = null";
    } else if (isNaN(Number(widthh)) || widthh === null || Number(widthh) <= 0) {
      return "width wrong";
    } else if (isNaN(Number(heightt)) || heightt === null || Number(heightt) <= 0) {
      return "height wrong";
    }
  }

  // if all parameters are correct then convert the width and height to numbers and return all good
  widthh = Number(widthh);
  heightt = Number(heightt);
  return "all good";
}

// export validateParameters to be used in processInput.ts
export default validateParameters;
