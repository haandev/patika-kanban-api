import { sequelize, DataTypes, Model } from "@ooic/core";
import { Checklist } from "./Checklist";
import { Label } from "./Label";
import { List } from "./List";

export class Card extends Model {
  id: number;
  title: string;
  description: string;
  duedate: Date;
  labels: Label[];
  comments: Comment[];
  list: List;
  listId: number;
  order:number;
  checklists: Checklist[];
}

Card.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    duedate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    /* field initialization */
  },
  {
    tableName: "card",
    sequelize,
  }
);
