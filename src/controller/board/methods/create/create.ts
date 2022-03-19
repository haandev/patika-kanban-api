import { RequestHandler } from "@ooic/core";
import { Board } from "@/model/Board";
import { schema } from ".";

const create: RequestHandler = async (request, response, next) => {
  try {
    const result = await Board.create({
      ...schema.body.parse(request.body),
      ownerId: request.authUser.id,
    });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create;
