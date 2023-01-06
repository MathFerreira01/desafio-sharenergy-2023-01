import { Botao } from '../Button';
import {
    Container,
    Text,
    Navigation,
    LinkPage,
    WrapperLogout,
    LinkNavigation,
} from './style';

export function Header() {
    const clearStorage = () => {
        console.log('chegou');
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <Container>
            <Text>SHARENERGY</Text>
            <Navigation>
                <LinkPage>
                    <LinkNavigation to="/">Ramdom Users</LinkNavigation>
                </LinkPage>
                <LinkPage>
                    <LinkNavigation to="/cats">Status Code</LinkNavigation>
                </LinkPage>
                <LinkPage>
                    <LinkNavigation to="/ramdom-dog">Ramdom Dog</LinkNavigation>
                </LinkPage>
                <LinkPage>
                    <LinkNavigation to="/users">Users</LinkNavigation>
                </LinkPage>
            </Navigation>
            <WrapperLogout>
                <Botao onClick={clearStorage} children="Logout" />
            </WrapperLogout>
        </Container>
    );
}
