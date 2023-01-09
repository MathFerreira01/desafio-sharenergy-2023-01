import { useState } from 'react';
import { Hamburger, Logo, Menu, MenuLink, Nav, ButtonLogout } from './style';

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
                <MenuLink to="/users">
                    <ButtonLogout onClick={clearStorage} children="Logout" />
                </MenuLink>
            </Menu>
        </Nav>
    );
};

export default Header;
