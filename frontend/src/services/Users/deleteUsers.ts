import { userApi } from './api';
import { Types } from 'mongoose';

export const deleteUsersServices = async (id: Types.ObjectId) => {
    return await userApi
        .delete(`/users/${id}`)
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};
