import { sequelize, DataTypes, Model } from "@ooic/core";

export class BoardMember extends Model {
  id: number;
  userId:number
  boardId:number
  /* type definitions */
}

BoardMember.init(
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
    tableName: "board_member",
    sequelize,
  }
);
