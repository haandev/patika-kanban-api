import { Board } from "@/model/Board";
import { CardLabel } from "@/model/CardLabel";
import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const destroy: RequestHandler = async (request, response, next) => {
  try {
    const { id } = schema.params.parse(request.params);
    const cardLabel = await CardLabel.findOne({
      where: { id: Number(id) },
    });
   
    cardLabel.destroy();
    response.status(200).send("Deleted");
  } catch (error) {
    next(error);
  }
};

export default destroy;
