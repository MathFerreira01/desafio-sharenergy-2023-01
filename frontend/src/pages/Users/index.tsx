import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Usercard } from '../../components/userCard';
import { Iuser } from '../../interface/users';
import { userApi } from '../../services/Users/api';
import { Container } from './style';

import { Types } from 'mongoose';
import { AppBar } from '../../components/AppBar';
import { getUsersServices } from '../../services/Users/getUsers';

export function Users() {
    const [users, setUsers] = useState<Iuser[]>([]);

    async function deleteUser(_id: Types.ObjectId) {
        const responde = await userApi.delete(`/users/${_id}`);
        getUsersServices();
    }

    useEffect(() => {
        const getUsers = async () => {
            const response = await getUsersServices();
            if (!response.error) {
                setUsers(response);
            }
        };
        getUsers();
    }, []);

    return (
        <>
            <Header children="Users" />
            <AppBar />
            <Container>
                {users.map((user, index) => (
                    <Usercard
                        key={index}
                        _id={user._id}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        adress={user.adress}
                        cpf={user.cpf}
                        deleteUser={deleteUser}
                    />
                ))}
            </Container>
        </>
    );
}
