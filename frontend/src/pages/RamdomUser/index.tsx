import { useState, useEffect } from 'react';
import { Container, SearchInput, WrapperPagination } from './style';

import Header from '../../components/Navbar';
import UsersPagination from '../../components/Pagination';
import UsersTable from '../../components/Table';

import { userProps } from '../../interface/IRamdomUser';

import getUserService from '../../services/RamdomUser/getUsers';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [users, setUsers] = useState<userProps[]>([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const numberOfPages = 15;
    const navigate = useNavigate();

    useEffect(() => {
        const getRomdomUsers = async () => {
            const apiReturn = await getUserService(page);

            if (apiReturn) {
                setUsers(apiReturn);
                return;
            }
            toast.error('Unable to locate users.');
        };
        getRomdomUsers();
    }, [page]);

    const filterUsers = users.filter(
        (user) =>
            user.login.username.includes(search) ||
            user.email.includes(search) ||
            user.name.first.includes(search)
    );

    return (
        <>
            <ToastContainer />
            <Header />
            <Container>
                <SearchInput
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Photo</TableCell>
                                <TableCell align="right">Full Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Username</TableCell>
                                <TableCell align="right">Age</TableCell>
                            </TableRow>
                        </TableHead>
                        {filterUsers.map((user, index) => (
                            <UsersTable
                                index={index}
                                photo={user.picture.thumbnail}
                                firstname={user.name.first}
                                lastName={user.name.last}
                                email={user.email}
                                username={user.login.username}
                                age={user.dob.age}
                            />
                        ))}
                    </Table>
                </TableContainer>
                <WrapperPagination>
                    <UsersPagination
                        pageNumber={numberOfPages}
                        setPage={setPage}
                    />
                </WrapperPagination>
            </Container>
        </>
    );
};

export default Home;
