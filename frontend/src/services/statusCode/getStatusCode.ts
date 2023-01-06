import { apiCode } from './apiStatusCode';

export const getStatusCodeServices = async () => {
    return await apiCode
        .get('/')
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};
