import { Iuser } from '../../interface/users';
import { userApi } from './api';

export const createUsersServices = async (user: Iuser) => {
    console.log(user)
    return await userApi
        .post('/users', user)
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};

