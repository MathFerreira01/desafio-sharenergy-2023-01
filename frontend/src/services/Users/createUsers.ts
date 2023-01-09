import { Iuser } from '../../interface/Iusers';
import userApi from './api';

const createUsersServices = async (user: Iuser) => {
    console.log(user);
    return await userApi
        .post('/users', user)
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};

export default createUsersServices;
