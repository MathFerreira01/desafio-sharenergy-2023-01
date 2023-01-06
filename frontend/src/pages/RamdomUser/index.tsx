import { Header } from '../../components/Header';
import { UsersTable } from '../../components/Table';
import { Container } from './style';

export function Home() {
    return (
        <div>
            <>
                <Header/>
                <Container>
                    <UsersTable />
                </Container>
            </>
        </div>
    );
}
