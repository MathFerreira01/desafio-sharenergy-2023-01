import apiCode from './apiStatusCode';

const getStatusCodeServices = async () => {
    return await apiCode
        .get('/')
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};

export default getStatusCodeServices;
