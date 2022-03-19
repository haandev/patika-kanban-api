import { User } from "@/model/User";
import express from "express";
import { FileArray } from "express-fileupload";
declare global {
  namespace Express {
    interface Request {
      authUser: User | any;
      clientIp: string;
      files: any
    }
  }
}

export interface Request<T> extends Express.Request {
  body: T
}