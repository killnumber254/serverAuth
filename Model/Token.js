const { Sequelize, DataTypes, Model } = require("sequelize");
const User = require("./User");
const sequelize = new Sequelize(`${process.env.POSTGRES_URL}`);

class Token extends Sequelize.Model {}

Token.init(
  {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,

    tableName: "Tokens", // Название модели (обязательно)
  }
);

// Token.belongsTo(User);

//обновление Модели
Token.sync({ force: true })
  .then(() => {
    console.log("Tables have been created");
  })
  .catch((err) => console.log(err));

module.exports = Token;
