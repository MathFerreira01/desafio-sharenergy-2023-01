import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        email: {type: String, required: true},
        phone: {type: String},
        adress: {type: String},
        cpf: {type: String, required: true},
    }
);

const users = mongoose.model('users', userSchema)

export default users;