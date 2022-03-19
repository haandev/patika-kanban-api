import { sequelize, DataTypes, Model } from "@ooic/core";
import { Checklist } from "./Checklist";

export class ChecklistItem extends Model {
  id: number;
  title:string
  isChecked:boolean
  checklistId:number
  checklist:Checklist
}

ChecklistItem.init(
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
    isChecked: {
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    }
    /* field initialization */
  },
  {
    tableName: "checklist_item",
    sequelize,
  }
);
