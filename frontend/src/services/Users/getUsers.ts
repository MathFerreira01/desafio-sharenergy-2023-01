import userApi from './api';

const getUsersServices = async () => {
    return await userApi
        .get('/users')
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};

export default getUsersServices;
