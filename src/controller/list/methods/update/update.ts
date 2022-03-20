import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";
const update: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);

    const list = await List.findOne({
      where: {
        id: Number(id),
      },
      include: [{ association: "board" }],
    });

    if (list.board.ownerId !== request.authUser.id)
      throw { statusCode: 401, message: "Only owner can update board" };

    list.update(schema.body.parse(request.body));
    response.status(200).send(list);
  } catch (error) {
    next(error);
  }
};

export default update;
