import { Board } from "@/model/Board";
import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";
const get: RequestHandler = async (request, response, next) => {
  try {
    const query = schema.query.parse(request.query);

    const listsFromOwnedBoards = await List.scope("nestedInclude").findAll({
      include: [
        {
          association: "board",
          model: Board.scope([
            { method: ["byMembership", request.authUser.id] },
          ]),
          ...(query.boardId ? { where: { id: query.boardId } } : {}),
        },
      ],
      order: [["order", "asc"]],
    });
    const listsFromJoinedBoards = await List.scope("nestedInclude").findAll({
      include: [
        {
          association: "board",
          model: Board.scope([
            { method: ["byOwnership", request.authUser.id] },
          ]),
          ...(query.boardId ? { where: { id: query.boardId } } : {}),
        },
      ],
      order: [["order", "asc"]],
    });

    const lists = [...listsFromJoinedBoards, ...listsFromOwnedBoards].sort(
      (a, b) => (a.order > b.order ? 1 : 0)
    );

    response.status(200).send(lists);
  } catch (error) {
    next(error);
  }
};

export default get;
