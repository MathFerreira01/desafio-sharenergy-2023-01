import { useState } from 'react';
import { Container, Span, Wrapper, BoxTextField, WrapperButton } from './style';
import { IUser } from '../../interface/IUsers';

import Button from '@mui/material/Button';
import Form from '../Form';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

const Usercard = ({
    index,
    _id,
    name,
    email,
    phone,
    adress,
    cpf,
    deleteUser,
}: IUser) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Container key={index}>
                <Wrapper>
                    <Span>{name}</Span>
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
                            <Form
                                user={{ name, email, phone, adress, cpf, _id }}
                                handleClose={handleClose}
                            />
                        </Box>
                    </Modal>
                    <Button size="small" onClick={() => deleteUser(_id)}>
                        Delete
                    </Button>
                </WrapperButton>
            </Container>
        </>
    );
};

export default Usercard;
