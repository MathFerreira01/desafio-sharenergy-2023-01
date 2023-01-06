import { userApi } from './api';

export const getUsersServices = async () => {
    return await userApi
        .get('/users')
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};
