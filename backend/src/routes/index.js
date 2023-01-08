import express from "express";
import users from "./usersRoutes.js";
import cors from "cors";

const routes = (App) => {
  App.route("/").get((req, res) => {
    res.status(200).send({ Title: "User List" });
  });

  App.use(cors(), express.json(), users);
};
export default routes;
