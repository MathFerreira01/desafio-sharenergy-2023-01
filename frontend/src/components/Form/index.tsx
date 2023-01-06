import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../contexts/createUsers';
import { Input } from '../Input';
import {
    Container,
    Text,
    BoxForm,
    Wrapper,
    Label,
    TextField,
    ButtonRegister,
} from './style';

export function Form() {
    const { client, setClient } = useContext(UserContext);

    async function createUser() {
        const response = await axios.post('http://localhost:3000/users', {
            ...client,
        });
        setClient({
            name: '',
            email: '',
            phone: '',
            adress: '',
            cpf: '',
        });
    }

    return (
        <Container>
            <form onSubmit={createUser}>
                <Text>Fill the form</Text>
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
}
