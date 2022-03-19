import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { Checklist } from "@/model/Checklist";
import { ChecklistItem } from "@/model/ChecklistItem";

const create: RequestHandler = async (request, response, next) => {
  try {
    const body = schema.body.parse(request.body);

    const result = await ChecklistItem.create(body);
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create;
