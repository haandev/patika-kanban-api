import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import uid2 from "uid2";

import { User } from "@/model/User";
import { Login } from "@/model/Login";
import { RequestHandler } from "@ooic/core";
import { schema } from ".";

const login: RequestHandler = async (request, response, next) => {
  try {
    const { username, password } = schema.body.parse(request.body);

    const user = await User.scope('login').findOne({
      where: { username },
    });
    if (!user || !(await bcrypt.compare(password, user.password))) throw { statusCode: 403, message: "Invalid Credentials" };

    const payload = { id: user.id, username: user.username };

    const token = jwt.sign(payload, process.env.TOKEN_KEY, {
      expiresIn: "120m", //TODO: make it less , maybe one minute
    });

    const _refreshToken = uid2(64);

    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 30);

    await Login.create({
      userId: user.id,
      refreshToken: _refreshToken,
      firstIp: request.clientIp,
      userAgent: request.headers["user-agent"],
      expiredAt: expires.toISOString(),
    });

    response.cookie("refreshToken", _refreshToken, {
      //   secure: process.env.NODE_ENV !== "development",
      httpOnly: true,
      expires,
    });

    response.cookie("accessToken", token, {
      //   secure: process.env.NODE_ENV !== "development",
      httpOnly: true,
      expires, //TODO: MAKE IT SAME WITH HEADER
    });

    return response.status(200).send({ ...payload, token });
  } catch (error) {
    next(error);
  }
};

export default login