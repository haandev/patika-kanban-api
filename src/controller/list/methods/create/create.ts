import { RequestHandler } from "@ooic/core";
import { List } from "@/model/List";
import { schema } from ".";
import { Board } from "@/model/Board";
import { User } from "@/model/User";

const create: RequestHandler = async (request, response, next) => {
  try {
    const body = schema.body.parse(request.body);
    const board = await Board.findOne({
      where: { id: Number(body.boardId) },
      include: [{ association: "members", model:User.scope("idList") }],
    });

    if (
      ![board.ownerId, ...board.members.map((member) => member.id)].includes(
        request.authUser.id
      )
    ) {
      throw { statusCode: 401, message: "You are not authorized to create list on this board" };
    }
    const result = await List.create(body);
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create;
