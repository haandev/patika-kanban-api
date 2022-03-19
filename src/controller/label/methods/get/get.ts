import { Board } from "@/model/Board";
import { Label } from "@/model/Label";
import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
const get: RequestHandler = async (request, response, next) => {
  try {

    
    const labels = await Label.findAll();


    response.status(200).send(labels);
  } catch (error) {
    next(error);
  }
};

export default get;
