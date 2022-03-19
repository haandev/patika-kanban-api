import { sequelize, DataTypes, Model } from "@ooic/core";
import { List } from "./List";
import { User } from "./User";

export class Board extends Model {
  id: number;
  title: string;
  owner: User;
  ownerId: number;
  members: User[];
  lists: List[];
}

Board.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    /* field initialization */
  },
  {
    tableName: "board",
    sequelize,
  }
);
