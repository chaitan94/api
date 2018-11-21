import * as dotenv from "dotenv";
import app from "./app";
import { dbConnect } from "./database";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const MONGO_LIVE_DB = process.env.MONGO_LIVE_DB;
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  dbConnect(MONGO_URI, MONGO_LIVE_DB);
}).on("error", () => {
  console.log("Error starting server");
});
