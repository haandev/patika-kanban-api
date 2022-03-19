import { sequelize, DataTypes, Model } from "@ooic/core";
import { Board } from "./Board";
import { Card } from "./Card";

export class List extends Model {
  id: number;
  title: string;
  board: Board;
  order: number;
  cards: Card[];
}

List.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    /* field initialization */
  },
  {
    tableName: "list",
    sequelize,
  }
);
