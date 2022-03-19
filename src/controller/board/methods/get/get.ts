import { Board } from "@/model/Board";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const get: RequestHandler = async (request, response, next) => {
  try {
    const boardsOwned = await Board.findAll({
      where: {
        ownerId: request.authUser.id,
      },
    });
    const boardsJoined = await Board.findAll({
      include: [{ association: "members", where: { id: request.authUser.id } }],
    });

    response.status(200).send([...boardsOwned, ...boardsJoined]);
  } catch (error) {
    next(error);
  }
};

export default get;
