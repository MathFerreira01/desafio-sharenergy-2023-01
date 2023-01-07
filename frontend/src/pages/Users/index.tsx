import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Usercard from '../../components/userCard';
import AppBar from '../../components/AppBar';

import { Container } from './style';

import { Iuser } from '../../interface/users';
import { Types } from 'mongoose';

import { deleteUsersServices } from '../../services/Users/deleteUsers';
import getUsersServices from '../../services/Users/getUsers';

const Users = () => {
    const [users, setUsers] = useState<Iuser[]>([]);

    const getUsers = async () => {
        const response = await getUsersServices();
        if (!response.error) {
            setUsers(response);
        }
    };

    const deleteUser = async (_id: Types.ObjectId) => {
        const response = await deleteUsersServices(_id);
        getUsers();
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <Header />
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
};

export default Users;
