import { apiDog } from "./apiDog";

export const getDogsServices = async () => {
    return await apiDog
        .get('/woof.json')
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};