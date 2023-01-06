import { userApi } from './api';

export const createUsersServices = async () => {
    return await userApi
        .post('/users')
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};