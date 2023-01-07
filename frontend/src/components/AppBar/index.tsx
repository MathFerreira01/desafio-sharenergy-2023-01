import { Button } from '../Button/style';
import { Container } from './style';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Form from '../Form';


export function AppBar() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose  = () => setOpen(false);
    
    return (
        <Container>
            <Button children="+ Add User" onClick={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Form />
                </Box>
            </Modal>
        </Container>
    );
}
