import { Board } from "@/model/Board";
import { Card } from "@/model/Card";
import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";
const get: RequestHandler = async (request, response, next) => {
  try {
    const {listId} = schema.query.parse(request.query);

    
    const cards = await Card.scope("nestedInclude").findAll({
      where: {
        ...listId?{listId}:{}
      }
    });

    response.status(200).send(cards);
  } catch (error) {
    next(error);
  }
};

export default get;
