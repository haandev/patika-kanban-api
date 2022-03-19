import { sequelize, DataTypes, Model } from "@ooic/core";
import { Card } from "./Card";
import { ChecklistItem } from "./ChecklistItem";

export class Checklist extends Model {
  id: number;
  title: string;
  items: ChecklistItem[];
  card: Card[];
  cardId: number;
}

Checklist.init(
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
    defaultScope: {
      include: [{ association: "items" }],
    },
    tableName: "checklist",
    sequelize,
  }
);
