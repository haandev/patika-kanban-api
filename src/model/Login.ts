import { sequelize, DataTypes, Model } from "@ooic/core";

import { User } from "./User";

export class Login extends Model {
  id: number;
  refreshToken: string;
  expiredAt: Date;
  userAgent: string;
  userId: number;
  firstIp: string;
}

Login.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    refreshToken: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    expiredAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    userAgent: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    firstIp: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
  },
  {
    tableName:"login",
    paranoid: true,
    sequelize,
  }
);

Login.belongsTo(User, { foreignKey: "userId" });
