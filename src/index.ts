import express from "express";
import routes from "./routes";

const app = express();
const port = 3000;

app.use("/", routes);

// listen on port
app.listen(port, (): void => {
  console.log(`server started on ${port}`);
});

// export app to be used in unit testing
export default app;
