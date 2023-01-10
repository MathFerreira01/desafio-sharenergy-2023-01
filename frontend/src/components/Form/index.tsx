import { useState } from 'react';
import { IUser } from '../../interface/IUsers';
import createUsersServices from '../../services/Users/createUsers';
import editUsersServices from '../../services/Users/editUsers';
import Input from '../Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Wrapper,
    Container,
    Text,
    BoxForm,
    Label,
    TextField,
    ButtonRegister,
    WrapperClose,
} from './style';

const initialState = {
    name: '',
    email: '',
    phone: '',
    adress: '',
    cpf: '',
};

const Form = ({
    user,
    handleClose,
}: {
    user?: Partial<IUser>;
    handleClose: () => void;
}) => {
    const [client, setClient] = useState(user || initialState);

    const handleSave = () => {
        if (user?._id) {
            editUser();
        }
        createUser();
    };

    const editUser = async () => {
        if (user?._id) {
            const response = await editUsersServices(user._id, client);
            const notifyEditError = toast.error(response.error);
            const notifyEditSucess = toast.success(response.message);

            if (response.error) {
                notifyEditError;
                return;
            }
            notifyEditSucess;
        }
    };

    const createUser = async () => {
        const response = await createUsersServices(client);
        const notifyCreateError = toast.error(response.error);
        const notifyCreateSucess = toast.success(response.message);

        if (response.error) {
            notifyCreateError;
            return;
        }
        notifyCreateSucess;
    };

    const HandleClickClose = () => {
        if (handleClose) {
            handleClose();
        }
    };

    return (
        <>
            <Container>
                <ToastContainer />
                <Wrapper>
                    <WrapperClose>
                        <a onClick={HandleClickClose}>Close</a>
                    </WrapperClose>
                    <form onSubmit={handleSave}>
                        <Text>Fill the Form</Text>
                        <BoxForm>
                            <Label>Name</Label>
                            <Input
                                type="text"
                                value={client.name}
                                onChange={(event) =>
                                    setClient({
                                        ...client,
                                        name: event.target.value,
                                    })
                                }
                            />

                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={client.email}
                                onChange={(event) =>
                                    setClient({
                                        ...client,
                                        email: event.target.value,
                                    })
                                }
                            />
                        </BoxForm>
                        <BoxForm>
                            <Label>Phone</Label>
                            <TextField
                                type="text"
                                value={client.phone}
                                onChange={(event) =>
                                    setClient({
                                        ...client,
                                        phone: event.target.value,
                                    })
                                }
                            />

                            <Label>Address</Label>
                            <TextField
                                type="text"
                                value={client.adress}
                                onChange={(event) =>
                                    setClient({
                                        ...client,
                                        adress: event.target.value,
                                    })
                                }
                            />
                            <Label>CPF</Label>
                            <TextField
                                type="text"
                                value={client.cpf}
                                onChange={(event) =>
                                    setClient({
                                        ...client,
                                        cpf: event.target.value,
                                    })
                                }
                            />
                        </BoxForm>

                        <ButtonRegister children="Register" />
                    </form>
                </Wrapper>
            </Container>
        </>
    );
};

export default Form;
