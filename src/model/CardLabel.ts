import { sequelize, DataTypes, Model } from "@ooic/core";

export class CardLabel extends Model {
  id: number;
  cardId:number
  labelId:number
  /* type definitions */
}

CardLabel.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    /* field initialization */
  },
  {
    tableName: "card_label",
    sequelize,
  }
);
