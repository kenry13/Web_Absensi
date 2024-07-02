import { Sequelize } from "sequelize";
import db from "./database.js";

const { DataTypes } = Sequelize;

const User = db.define("user", {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(255),
  },
  nfc_tag: {
    type: DataTypes.STRING,
  },  
}, {
    freezeTableName: true
});

// await User.sync();

export default User;
