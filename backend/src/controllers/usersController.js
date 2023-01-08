import UserModel from "../models/Users.js";

export const ListUsersController = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).send({
      message: `${err.message} - Could not find users.`,
    });
  }
};

export const ListUserByIDController = async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await UserModel.findById(userID);
  } catch (err) {
    res.status(400).send({ message: `${err.message} - User id not found.` });
  }
};

export const RegisterUserController = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).send(user.toJSON());
  } catch (err) {
    res
      .status(500)
      .send({ message: `${err.message} - Failed to register user` });
  }
};

export const UpdateUserController = async (req, res) => {
  try {
    const userID = req.params.id;
    await UserModel.findByIdAndUpdate(userID, { $set: req.body });
    res.status(200).send({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const DeleteUserController = async (req, res) => {
  try {
    const userID = req.params.id;
    await UserModel.findByIdAndDelete(userID);
    res.status(200).send({ message: "User removed successfully." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
