import { useState } from 'react';
import { Iuser } from '../../interface/users';
import createUsersServices from '../../services/Users/createUsers';
import editUsersServices from '../../services/Users/editUsers';
import Input from '../Input';
import {
    Container,
    Text,
    BoxForm,
    Wrapper,
    Label,
    TextField,
    ButtonRegister,
} from './style';

const initialState = {
    name: '',
    email: '',
    phone: '',
    adress: '',
    cpf: '',
};

const Form = ({ user }: { user: Iuser }) => {
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

    return (
        <Container>
            <form onSubmit={handleSave}>
                <Text>Fill the Form</Text>
                <BoxForm>
                    <Wrapper>
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
                    </Wrapper>
                    <Wrapper>
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
                    </Wrapper>
                </BoxForm>
                <BoxForm>
                    <Wrapper>
                        <Label>Telefone</Label>
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
                    </Wrapper>
                    <Wrapper>
                        <Label>Endereço</Label>
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
                    </Wrapper>
                    <Wrapper>
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
                    </Wrapper>
                </BoxForm>

                <ButtonRegister children="Register" />
            </form>
        </Container>
    );
};

export default Form;
