import fs, { PathLike } from "fs";

// check if file exists
async function fileExists(pathh: PathLike): Promise<boolean> {
  const response = fs.existsSync(pathh);
  return response;
}

// export fileExists to be used on processInput.ts and validateParameters.ts and unit testing
export default fileExists;
