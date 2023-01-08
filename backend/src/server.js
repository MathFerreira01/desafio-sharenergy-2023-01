import App from "./App.js";
import * as dontenv from "dotenv";
import connect from "./config/dbConnect.js";

dontenv.config();
const port = process.env.PORT || 3000;

App.listen(port, async () => {
  await connect();
  console.log(`Server running on http://localhost:${port}`);
});
