import Sequelize from "sequelize";

const db = new Sequelize('webabsensi','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;