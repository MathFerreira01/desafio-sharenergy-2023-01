import Header from '../../components/Header';
import UsersTable from '../../components/Table';
import { Container } from './style';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
            <>
                <Navbar/>
                <Container>
                    <UsersTable />
                </Container>
            </>
    );
};

export default Home;
