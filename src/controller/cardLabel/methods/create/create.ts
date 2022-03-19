import { RequestHandler } from "@ooic/core";
import { schema } from ".";
import { CardLabel } from "@/model/CardLabel";

const create: RequestHandler = async (request, response, next) => {
  try {
    const body = schema.body.parse(request.body);
    const result = await CardLabel.create(body);
    response.send(result);
  } catch (error) {
    next(error);
  }
};

export default create;
