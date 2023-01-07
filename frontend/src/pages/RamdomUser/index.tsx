import Header from '../../components/Header';
import UsersTable from '../../components/Table';
import { Container } from './style';

const Home = () => {
    return (
        <div>
            <>
                <Header />
                <Container>
                    <UsersTable />
                </Container>
            </>
        </div>
    );
};

export default Home;
