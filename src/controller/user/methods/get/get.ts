import { User } from "@/model/User";
import { RequestHandler } from "@ooic/core";
const get: RequestHandler = async (request, response, next) => {
  try {
    const users = await User.findAll({});

    response.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

export default get;
