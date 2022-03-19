import { ErrorRequestHandler, StatusCodes } from "@ooic/core";
const ZodError: ErrorRequestHandler = async (error, _request, response, next) => {
  if (error.name === "ZodError") return response.status(StatusCodes.BAD_REQUEST).send(error).json();
  next(error);
};
export default ZodError
