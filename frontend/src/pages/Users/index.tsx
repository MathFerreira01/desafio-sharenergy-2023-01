import { useState, useEffect } from 'react';

import Header from '../../components/Navbar';
import Usercard from '../../components/UserCard';
import AppBar from '../../components/AppBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './style';

import { IUser } from '../../interface/IUsers';
import { Types } from 'mongoose';

import { deleteUsersServices } from '../../services/Users/deleteUsers';
import getUsersServices from '../../services/Users/getUsers';

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const getUsers = async () => {
        const response = await getUsersServices();
        const notifyGetUsers = toast(response.error);
        if (response.error) {
            notifyGetUsers;
        }
        setUsers(response);
    };

    const deleteUser = async (_id: Types.ObjectId) => {
        const response = await deleteUsersServices(_id);
        const notifyDeleteError = toast.error(response.error);
        const notifyDeleteSucess = toast.success(response.message);

        if (response.error) {
            notifyDeleteError;
            return;
        }
        notifyDeleteSucess;
        getUsers();
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <ToastContainer />
            <Header />
            <AppBar />
            <Container>
                {users.map((user, index) => (
                    <Usercard
                        index={index}
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
