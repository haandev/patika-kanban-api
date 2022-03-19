import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { Comment } from "@/model/Comment";

const create: RequestHandler = async (request, response, next) => {
  try {
    const body = schema.body.parse(request.body);
    const result = await Comment.create({
      ...body,
      authorId: request.authUser.id,
    });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create;
