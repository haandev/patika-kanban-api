import { BoardMember } from "@/model/BoardMember";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const destroy: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const boardMember = await BoardMember.findOne({
      where: { id: Number(id) },
    });
   
    boardMember.destroy();
    response.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
};

export default destroy;
