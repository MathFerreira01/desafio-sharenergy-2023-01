import { useState } from 'react';
import { Iuser } from '../../interface/IUsers';
import createUsersServices from '../../services/Users/createUsers';
import editUsersServices from '../../services/Users/editUsers';
import Input from '../Input';
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

interface IModal {
    handleCloseAdd: () => void;
    handleCloseEdit: () => void;
}

const Form = ({
    user,
    handleCloseAdd,
    handleCloseEdit,
}: {
    user: Iuser;
    handleCloseAdd: IModal;
    handleCloseEdit: IModal;
}) => {
    const [client, setClient] = useState(user || initialState);

    const handleSave = () => {
        if (user?._id) {
            editUser();
            return;
        }
        createUser();
    };

    const editUser = async () => {
        const response = await editUsersServices(user._id, client);
    };

    const createUser = async () => {
        const response = await createUsersServices(client);
    };

    const HandleClickClose = () => {
        if (handleCloseAdd) {
            handleCloseAdd();
            return;
        }
        handleCloseEdit();
    };

    return (
        <Container>
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
    );
};

export default Form;
