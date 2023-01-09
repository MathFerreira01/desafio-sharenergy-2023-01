import userApi from './api';
import { Types } from 'mongoose';
import { Iuser } from '../../interface/IUsers';

const editUsersServices = async (id: Types.ObjectId, user: Iuser) => {
    return await userApi
        .put(`/users/${id}`, user)
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};

export default editUsersServices;
