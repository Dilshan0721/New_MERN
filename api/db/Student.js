const { Model, Sequelize } = require("sequelize");
const databaseCon = require("./dbCon");

class Student extends Model {}

Student.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: databaseCon,
    modelName: "Student",
  },
);

module.exports = Student;
