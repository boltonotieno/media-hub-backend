import { Router } from "express";
import UserController from "./usersController";
import middlewares from "../../middlewares";

const { UsersMiddleware } = middlewares;

const UserRouter = Router();

UserRouter.post("/user", UserController.mainFunction);

UserRouter.post(
  "/login",
  UsersMiddleware.validateLoginData,
  UsersMiddleware.validateLoginCredentials,
  UserController.userLogin
);

export default UserRouter;
