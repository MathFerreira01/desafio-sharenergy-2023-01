import express from "express";
import {
  DeleteUserController,
  ListUserByIDController,
  ListUsersController,
  RegisterUserController,
  UpdateUserController,
} from "../controllers/usersController.js";

const router = express.Router();

router
  .get("/users", ListUsersController)
  .get("/users/:id", ListUserByIDController)
  .post("/users", RegisterUserController)
  .put("/users/:id", UpdateUserController)
  .delete("/users/:id", DeleteUserController);

export default router;
