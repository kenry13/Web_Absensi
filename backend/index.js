import Express from "express";
import db from "./database.js";
import cors from "cors";
import User from "./Model_User.js";
import Attedance from "./Model_Attedance.js";
import Route from "./route.js";
import fileUpload from "express-fileupload";

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(fileUpload());
app.use(Route);

try {
  await db.authenticate();
  console.log("database connected");
  // User.sync();
  // Attedance.sync();
} catch (error) {
  console.error(error);
}

app.listen(5000, () => console.log("jalan cuy..."));
