import { Board } from "@/model/Board";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const destroy: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const board = await Board.findOne({ where: { id: Number(id) } });
    if (board.ownerId !== request.authUser.id) throw { statusCode: 401, message: "You are not the owner of the board you are trying to delete." };
    board.destroy();
    response.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
};

export default destroy;
