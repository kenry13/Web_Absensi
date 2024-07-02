import Express from "express";
import db from "./database.js";
import User from "./Model_User.js";
import Attedance from "./Model_Attedance.js";

const app = Express();

app.use(Express.json());

try {
    await db.authenticate();
    console.log("database connected");
    // User.sync();
    // Attedance.sync();
} catch (error) {
    console.error(error)
}

app.listen(5000, () => console.log("jalan cuy..."));