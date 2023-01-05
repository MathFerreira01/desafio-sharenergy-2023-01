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
    const {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        adress,
        setAdress,
        cpf,
        setCpf,
    } = useContext(UserContext);

    async function createUser() {
        const response = await axios.post('http://localhost:3000/users', {
            name,
            email,
            phone,
            adress,
            cpf,
        });
        setName('');
        setEmail('');
        setPhone('');
        setAdress('');
        setCpf('');
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
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Wrapper>
                    <Wrapper>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Wrapper>
                </BoxForm>
                <BoxForm>
                    <Wrapper>
                        <Label>Telefone</Label>
                        <TextField
                            type="text"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </Wrapper>
                    <Wrapper>
                        <Label>Endereço</Label>
                        <TextField
                            type="text"
                            value={adress}
                            onChange={(event) => setAdress(event.target.value)}
                        />
                    </Wrapper>
                    <Wrapper>
                        <Label>CPF</Label>
                        <TextField
                            type="text"
                            value={cpf}
                            onChange={(event) => setCpf(event.target.value)}
                        />
                    </Wrapper>
                </BoxForm>

                <ButtonRegister children="Register" />
            </form>
        </Container>
    );
}
