import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { BoardMember } from "@/model/BoardMember";
import { User } from "@/model/User";

const create: RequestHandler = async (request, response, next) => {
  try {
    const body = schema.body.parse(request.body);
    const userId = Number((await User.findOne({ where: { username: body.username } })).id);
    const result = await BoardMember.create({ boardId: body.boardId, userId });
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create;
