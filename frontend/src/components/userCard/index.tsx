import Button from '@mui/material/Button';
import { Container, Wrapper, BoxTextField, WrapperButton } from './style';
import { Iuser } from '../../interface/users';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Form } from '../Form';
import axios from 'axios';

export function Usercard({
    index,
    _id,
    name,
    email,
    phone,
    adress,
    cpf,
    deleteUser,
}: Iuser) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function editUser() {
        const response = await axios.put("/users")
    }
    return (
        <>
            <Container key={index}>
                <Wrapper>
                    <span>{name}</span>
                    <BoxTextField>
                        <span>E-mail: {email}</span>
                        <span>Phone: {phone}</span>
                    </BoxTextField>
                    <span>Endereço: {adress}</span>
                    <span>CPF: {cpf}</span>
                </Wrapper>
                <WrapperButton>
                    <Button size="small" onClick={handleOpen}>
                        EDIT
                    </Button>
                    <Modal open={open} onClose={handleClose}>
                        <Box>
                            <Form />
                        </Box>
                    </Modal>
                    <Button size="small" onClick={() => deleteUser(_id)}>
                        Delete
                    </Button>
                </WrapperButton>
            </Container>
        </>
    );
}
