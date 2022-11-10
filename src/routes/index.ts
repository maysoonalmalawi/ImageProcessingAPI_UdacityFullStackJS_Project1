import express from "express";
import imagesRoute from "./api/images";

const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response): void => {
  res.send(
    "Welcome to my Image Processing API. Please navigate to /images and start manipulating images!"
  );
});

// images page
routes.use("/images", imagesRoute);

// export routes to be used on index.ts
export default routes;
