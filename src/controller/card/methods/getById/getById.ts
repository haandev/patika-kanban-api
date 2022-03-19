import { Card } from "@/model/Card";
import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const getById: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const card = await Card.scope("nestedInclude").findOne({
      where: { id: Number(id) },
    });
   
    response.status(200).send(card);
  } catch (error) {
    next(error);
  }
};

export default getById;
