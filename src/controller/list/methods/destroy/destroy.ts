import { Board } from "@/model/Board";
import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const destroy: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const list = await List.findOne({
      where: { id: Number(id) },
      include: [
        {
          association: "board",
          model: Board.scope("withMemberIds"),
        },
      ],
    });
    if (list.board.ownerId !== request.authUser.id)
      throw {
        statusCode: 401,
        message: "You are not the owner of the board you are trying to delete.",
      };
    list.destroy();
    response.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
};

export default destroy;
