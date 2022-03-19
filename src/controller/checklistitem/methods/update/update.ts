import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { ChecklistItem } from "@/model/ChecklistItem";

const create: RequestHandler = async (request, response, next) => {
  try {
    const body = schema.body.parse(request.body);
    const { id } = schema.params.parse(request.params);
    const checklistItem = await ChecklistItem.findOne({
      where: { id: Number(id) },
    });
    checklistItem.update(body)
    response.send(checklistItem);
  } catch (error) {
    next(error);
  }
};

export default create;
