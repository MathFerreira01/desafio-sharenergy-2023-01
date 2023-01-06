import { Types } from 'mongoose';
import { SetStateAction } from 'react';

export interface usersProps {
    client: {
        name: string;
        email: string;
        phone: string;
        adress: string;
        cpf: string;
    };
    setClient: React.Dispatch<
        SetStateAction<{
            name: string;
            email: string;
            phone: string;
            adress: string;
            cpf: string;
        }>
    >;
}

export interface Iuser {
    _id: Types.ObjectId;
    name: string;
    email: string;
    phone: string;
    adress: string;
    cpf: string;

    deleteUser: (_id: Types.ObjectId) => void;
}
