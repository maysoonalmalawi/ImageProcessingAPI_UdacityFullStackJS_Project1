import express from "express";
import processInput from "../../functions/processInput";

const imagesRoute = express.Router();

// images page
imagesRoute.get("/", processInput, () => {
  console.log("request processed successfuly!");
});

// export imagesRoute to be used on main route
export default imagesRoute;
