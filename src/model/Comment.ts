import { sequelize, DataTypes, Model } from "@ooic/core";
import { User } from "./User";

export class Comment extends Model {
  id: number;
  messsge: string;
  author: User;
}

Comment.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    /* field initialization */
  },
  {
    defaultScope: {
      include: [{ association: "author" }],
    },
    tableName: "comment",
    sequelize,
  }
);
