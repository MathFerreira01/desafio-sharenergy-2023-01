import apiUsers  from './apiUsers';

const getUserService = async (page: number) => {
    return await apiUsers
        .get(`?page=${page}&results=8&seed=abc`)
        .then((response) => response.data.results)
        .catch(() => {
            error: true;
        });
};

export default getUserService;
