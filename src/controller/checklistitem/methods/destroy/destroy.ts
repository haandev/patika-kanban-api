import { Checklist } from "@/model/Checklist";
import { ChecklistItem } from "@/model/ChecklistItem";
import { Comment } from "@/model/Comment";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const destroy: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const checklistItem = await ChecklistItem.findOne({
      where: { id: Number(id) },
    });
   
    checklistItem.destroy();
    response.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
};

export default destroy;
