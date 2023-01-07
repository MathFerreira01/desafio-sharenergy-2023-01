import users from "../models/Users.js";

class UsersController {
  static listUsers = (req, res) => {
    users
      .find()
      .populate("name")
      .exec((err, users) => {
        if (users) {
          res.status(200).json(users);
          return;
        }
        res.status(500).send({
          message: `${err.message} - Não foi possível localizar os usuários.`,
        });
      });
  };

  static listUsersById = (req, res) => {
    const id = req.params.id;

    users.findById(id, (err, users) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - id do usuário não localizado.` });
        return;
      }
      res.status(200).send(users);
    });
  };

  static registerUser = (req, res) => {
    let user = new users(req.body);
    user.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar o usuário` });
        return;
      }
      res.status(201).send(user.toJSON());
    });
  };

  static updateUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Usuário atualizado com sucesso" });
        return;
      }
      res.status(500).send({ message: err.message });
    });
  };

  static deleteUser = (req, res) => {
    let id = req.params.id;

    users.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Usuário removido com sucesso." });
        return;
      }
      res.status(500).send({ message: err.message });
    });
  };
}

export default UsersController;
