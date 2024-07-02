import Express from "express";
import { CreateUser, DeleteUser, ValidateUser } from "./Controller_User.js";

const Route = Express.Router();

Route.post("/user", ValidateUser, CreateUser)
Route.delete("/user/:id_user", DeleteUser)

export default Route;