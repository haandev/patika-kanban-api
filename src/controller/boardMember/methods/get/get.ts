import { Board } from "@/model/Board";
import { BoardMember } from "@/model/BoardMember";
import { List } from "@/model/List";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";
const get: RequestHandler = async (request, response, next) => {
  try {
    const query = schema.query.parse(request.query);

    const boardMembers = await BoardMember.findAll({
      where:{
        boardId:query.boardId
      },
      include:[
        {association:"board"}
        {association:"user"}
      ]
    });

    response.status(200).send(boardMembers);
  } catch (error) {
    next(error);
  }
};

export default get;
