import { sequelize, DataTypes, Model } from "@ooic/core";

export class User extends Model {
  id: number;
  username: string;
  password: string;
}

User.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ["password"],
      },
    },
    scopes: {
      idList: {
        attributes: ["id"],
      },
      login: {
        attributes: ["id", "username", "password"],
      },
    },
    tableName: "user",
    sequelize,
  }
);
