import UserModel from "../models/Users.js";

export const ListUsersController = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).send({
      message: `${err.message} - Não foi possível localizar os usuários.`,
    });
  }
};

export const ListUserByIDController = async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await UserModel.findById(userID);
  } catch (err) {
    res.status(400).send({ message: `${err.message} - id do usuário não localizado.` });
  }
}

export const RegisterUserController = async (req, res) => {
  try {
      const user = new UserModel(req.body);
      await user.save();
      res.status(201).send(user.toJSON());
  } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao cadastrar o usuário` });
  }
};

export const UpdateUserController = async (req, res) => {
  try {
      const userID = req.params.id;
      await UserModel.findByIdAndUpdate(userID, { $set: req.body });
      res.status(200).send({ message: "Usuário atualizado com sucesso" });
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
};

export const DeleteUserController = async (req, res) => {
  try {
      const userID = req.params.id;
      await UserModel.findByIdAndDelete(userID);
      res.status(200).send({ message: "Usuário removido com sucesso." });
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
};

