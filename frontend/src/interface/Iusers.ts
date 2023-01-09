import { Types } from 'mongoose';

export interface Iuser {
    _id: Types.ObjectId;
    name: string;
    email: string;
    phone: string;
    adress: string;
    cpf: string;

    deleteUser: (_id: Types.ObjectId) => void;
}
