import { Types } from 'mongoose';

export interface IUser {
    _id: Types.ObjectId;
    index: number;
    name: string;
    email: string;
    phone: string;
    adress: string;
    cpf: string;

    deleteUser: (_id: Types.ObjectId) => void;
}
