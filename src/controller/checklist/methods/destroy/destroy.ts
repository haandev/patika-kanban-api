import { Checklist } from "@/model/Checklist";
import { Comment } from "@/model/Comment";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const destroy: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const checklist = await Checklist.findOne({
      where: { id: Number(id) },
    });
   
    checklist.destroy();
    response.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
};

export default destroy;
