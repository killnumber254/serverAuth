const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(`${process.env.POSTGRES_URL}`);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
