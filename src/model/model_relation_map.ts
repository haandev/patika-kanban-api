import { Board } from "./Board";
import { BoardMember } from "./BoardMember";
import { Card } from "./Card";
import { Checklist } from "./Checklist";
import { ChecklistItem } from "./ChecklistItem";
import { Comment } from "./Comment";
import { Label } from "./Label";
import { List } from "./List";
import { User } from "./User";
import { CardLabel } from "./CardLabel";

Board.belongsTo(User, { as: "owner", foreignKey: "ownerId" });
Board.belongsToMany(User, {
  as: "members",
  through: BoardMember,
  foreignKey: "boardId",
});
Board.hasMany(List, { as: "lists", foreignKey: "boardId" });

Card.belongsTo(List, { as: "list", foreignKey: "listId" });
Card.belongsToMany(Label, {
  through: CardLabel,
  foreignKey: "cardId",
  as: "labels",
});

Card.hasMany(Checklist, { as: "checklists", foreignKey: "cardId" });
Card.hasMany(Comment, { as: "comments", foreignKey: "cardId" });

Checklist.belongsTo(Card, { as: "card", foreignKey: "cardId" });
Checklist.hasMany(ChecklistItem, { as: "items", foreignKey: "checklistId" });

ChecklistItem.belongsTo(Checklist, {
  as: "checklist",
  foreignKey: "checklistId",
});

Comment.belongsTo(Card, { as: "card", foreignKey: "cardId" });
Comment.belongsTo(User, { as: "author", foreignKey: "authorId" });
Label.belongsToMany(Card, {
  through: CardLabel,
  foreignKey: "labelId",
  as: "labels",
});
List.belongsTo(Board, { as: "board", foreignKey: "boardId" });
List.hasMany(Card, { as: "cards", foreignKey: "listId" });

User.belongsToMany(Board, {
  as: "joinedBoards",
  through: BoardMember,
  foreignKey: "userId",
});
User.hasMany(Board, { as: "ownedBoards", foreignKey: "ownerId" });
User.hasMany(Comment, { as: "comments", foreignKey: "authorId" });

BoardMember.belongsTo(User, { as: "user", foreignKey: "userId" });
BoardMember.belongsTo(Board, { as: "board", foreignKey: "boardId" });

CardLabel.belongsTo(Card, { as: "card", foreignKey: "cardId" });
CardLabel.belongsTo(Label, { as: "label", foreignKey: "labelId" });

Card.addScope("nestedInclude", {
  include: [
    { association: "labels" },
    { association: "checklists" },
    { association: "comments" },
  ],
});

List.addScope("nestedInclude", {
  include: [
    {
      association: "cards",
      model: Card.scope("nestedInclude"),
    },
  ],
});
Board.addScope("nestedInclude", {
  include: [
    {
      association: "lists",
      model: List.scope("nestedInclude"),
    },
    { association: "owner" },
    { association: "members" },
  ],
});
Board.addScope("withMemberIds", {
  include: [{ association: "members", model: User.scope("idList") }],
});
Board.addScope("byOwnership", (ownerId: number) => ({
  where: { ownerId },
  required: true,
}));
Board.addScope("byMembership", (userId: number) => ({
  include: [
    {
      association: "members",
      model: User.scope("idList"),
      where: { id: userId },
    },
  ],
  required: true,
}));

List.addScope("withBoardMemberIds", {
  include: [
    {
      association: "board",
      model: Board.scope("withMemberIds"),
    },
  ],
});


import "./seeder"
export default {};
