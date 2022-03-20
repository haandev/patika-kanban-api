import { Card } from "@/model/Card";
import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";
const update: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);

    const card = await Card.findOne({
      where: {
        id: Number(id),
      },
    });


    card.update(schema.body.parse(request.body));
    response.status(200).send(card);
  } catch (error) {
    next(error);
  }
};

export default update;
