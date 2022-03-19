import { RequestHandler } from "@ooic/core";

const user: RequestHandler = async (request, response, next) => {
  try {
    response.status(200).send(request.authUser);
  } catch (error) {
    next(error)
  }
}

export default user