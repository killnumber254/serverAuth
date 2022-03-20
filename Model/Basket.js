const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(`${process.env.POSTGRESQL_URL}`);

class Basket extends Sequelize.Model {}

Basket.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  books: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // token: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  sequelize,

  tableName: "Books", // Название модели (обязательно)
});

Basket.sync({ force: true })
  .then(() => {
    console.log("Tables have been created");
  })
  .catch((err) => console.log(err));

module.exports = Basket;
