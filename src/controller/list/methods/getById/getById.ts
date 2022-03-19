import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const list = await List.scope(["nestedInclude","withBoardMemberIds"]).findOne({
      where: { id: Number(id) },
    });
    if (
      ![list.board.ownerId, ...list.board.members.map((member) => member.id)].includes(
        request.authUser.id
      )
    )
      throw { statusCode: 401, message: "You are not authorized to access" };

    response.status(200).send(list);
  } catch (error) {
    next(error);
  }
};

export default getById;
