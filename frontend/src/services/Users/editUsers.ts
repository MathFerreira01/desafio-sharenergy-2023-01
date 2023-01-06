import { userApi } from './api';
import { Types } from 'mongoose';

export const editUsersServices = async (id: Types.ObjectId) => {
    return await userApi
        .put(`/users/${id}`)
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};