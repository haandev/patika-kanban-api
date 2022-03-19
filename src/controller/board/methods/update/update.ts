import { Board } from "@/model/Board";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";
const update: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);

    const board = await Board.findOne({ where: { id: Number(id) } });
    
    if (board.ownerId !== request.authUser.id)
      throw { statusCode: 401, message: "Only owner can update board" };

    board.update(schema.body.parse(request.body));
    response.status(200).send(board);
  } catch (error) {
    next(error);
  }
};

export default update;
