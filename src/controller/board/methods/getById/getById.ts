import { Board } from "@/model/Board";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    console.log(id)
    const board = await Board.scope("nestedInclude").findOne({
      where: { id: Number(id) }
    });

    if (
      ![board.ownerId, ...board.members.map((member) => member.id)].includes(
        request.authUser.id
      )
    )
      throw { statusCode: 401, message: "You are not authorized to access" };

    response.status(200).send(board);
  } catch (error) {
    next(error);
  }
};

export default getById;
