import { useState } from 'react';
import { Container } from './style';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Form from '../Form';
import Botao from '../Button';

const AppBar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container>
            <Botao children="+ Add User" onClick={handleOpen} />
            <Modal
                open={open}
                
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Form handleClose={handleClose}/>
                </Box>
            </Modal>
        </Container>
    );
};

export default AppBar;
