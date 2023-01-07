import App from "./src/App.js";
import * as dontenv from "dotenv";
import connect from "./src/config/dbConnect.js";

dontenv.config();
const port = process.env.PORT || 3000;

App.listen(port, async () => {
  await connect();
  console.log(`Servidor rodando em http://localhost:${port}`);
});
