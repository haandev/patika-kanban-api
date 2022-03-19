import { ErrorRequestHandler, StatusCodes } from "@ooic/core";
const SequelizeValidationError: ErrorRequestHandler = async (error, _request, response, next) => {
  if (error.name === "SequelizeValidationError") return response.status(StatusCodes.NOT_ACCEPTABLE).send(error).json();
  next(error);
};
export default SequelizeValidationError