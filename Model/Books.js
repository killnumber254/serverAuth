const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(`${process.env.POSTGRESQL_URL}`);

class Books extends Sequelize.Model {}

Books.init({
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  book: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequelize,

  tableName: "Books", // Название модели (обязательно)
});

Book.sync({ force: true })
  .then(() => {
    console.log("Tables have been created");
  })
  .catch((err) => console.log(err));

module.exports = Books;
