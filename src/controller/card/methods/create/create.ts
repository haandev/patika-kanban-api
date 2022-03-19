import { RequestHandler } from "@ooic/core";
import { List } from "@/model/List";
import { schema } from ".";
import { Board } from "@/model/Board";
import { User } from "@/model/User";
import { Card } from "@/model/Card";

const create: RequestHandler = async (request, response, next) => {
  try {
    const body = schema.body.parse(request.body);
    const list = await List.scope("withBoardMemberIds").findOne({
      where: { id: Number(body.listId) },
    });

    if (
      ![list.board.ownerId, ...list.board.members.map((member) => member.id)].includes(
        request.authUser.id
      )
    ) {
      throw { statusCode: 401, message: "You are not authorized to create list on this board" };
    }
    const result = await Card.create(body);
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create;
