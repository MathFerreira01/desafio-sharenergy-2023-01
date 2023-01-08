import { useState } from 'react';
import Botao from '../Button';
import { Hamburger, Logo, Menu, MenuLink, Nav, WrapperLogout } from './style';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clearStorage = () => {
        console.log('chegou');
        localStorage.clear();
        window.location.href = '/login';
    };
    return (
        <Nav>
            <Logo>SHARENERGY</Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to="/">Ramdom Users</MenuLink>
                <MenuLink to="/cats">Status Code</MenuLink>
                <MenuLink to="/ramdom-dog">Ramdom Dog</MenuLink>
                <MenuLink to="/users">Users</MenuLink>
            </Menu>
            <WrapperLogout>
                <Botao onClick={clearStorage} children="Logout" />
            </WrapperLogout>
        </Nav>
    );
};

export default Header;
