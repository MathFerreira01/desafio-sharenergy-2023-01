import UsersTable from '../../components/Table';
import { Container } from './style';
import Header from '../../components/Navbar';

const Home = () => {
    return (
            <>
                <Header/>
                <Container>
                    <UsersTable />
                </Container>
            </>
    );
};

export default Home;
