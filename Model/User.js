const { Sequelize, DataTypes, Model } = require("sequelize");
const Token = require("./Token");
const sequelize = new Sequelize(`${process.env.POSTGRES_URL}`);

class User extends Sequelize.Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUnique: (value, next) => {
          User.findAll({
            where: { username: value },
            attributes: ["id"],
            notEmpty: true,
          })
            .then((user) => {
              if (user.length != 0)
                next(new Error(" Username already in use!"));
              next();
            })
            .catch((onError) => console.log(onError, "Ошибка"));
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,

    tableName: "Users", // Название модели (обязательно)
  }
);

//обновление Модели
User.sync({ force: true })
  .then(() => {
    console.log("Tables have been created");
  })
  .catch((err) => console.log(err));

// User.hasMany(Token, {
//   foreignKey: DataTypes.UUID,
// });

// Token.belongsTo(User);

module.exports = User;
