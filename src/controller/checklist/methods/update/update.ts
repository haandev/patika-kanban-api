import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { Checklist } from "@/model/Checklist";

const create: RequestHandler = async (request, response, next) => {
  try {
    const body = schema.body.parse(request.body);
    const { id } = schema.params.parse(request.params);
    const checklist = await Checklist.findOne({
      where: { id: Number(id) },
    });
    checklist.update(body)
    response.send(checklist);
  } catch (error) {
    next(error);
  }
};

export default create;
