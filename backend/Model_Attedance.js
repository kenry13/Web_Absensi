import { Sequelize } from "sequelize";
import db from "./database.js";
import User from "./Model_User.js";

const { DataTypes } = Sequelize;

const Attedance = db.define(
  "attedance",
  {
    id_attedance: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    chek_in_time: {
      type: DataTypes.DATE,
    },
    chek_out_time: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

Attedance.belongsTo(User, { foreignkey: "user_id", onDelete: "CASCADE" });
User.hasMany(Attedance, { foreignkey: "user_id" });

// await Attedance.sync();

export default Attedance;
