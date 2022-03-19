import { Board } from "@/model/Board";
import { Card } from "@/model/Card";
import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const destroy: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const card = await Card.findOne({
      where: {
        id: Number(id),
      },
      include: [
        { association: "list", model: List.scope("withBoardMemberIds") },
      ],
    });
    if (
      ![
        card.list.board.ownerId,
        ...card.list.board.members.map((member) => member.id),
      ].includes(request.authUser.id)
    )
      throw {
        statusCode: 401,
        message: "You are not the owner of the board you are trying to delete.",
      };
    card.destroy();
    response.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
};

export default destroy;
