import  Sequelize  from "sequelize";

const sequelize = new Sequelize("taskmanager", "root", "softsuave", {
  host: "localhost",
  dialect: "mysql"
});

export default sequelize;
