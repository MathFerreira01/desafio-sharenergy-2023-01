import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/Firebase/firebaseConfig';

import { Wrapper, Title, Form, Label, Span } from './style';
import Input from '../../components/Input';
import Botao from '../../components/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cadastro = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);

        if (user) {
            toast.success('Successfully registered user!');
            navigate('/');
        }

        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <ToastContainer />
            <Wrapper>
                <Title>Create an Account</Title>
                <Form onSubmit={handleSubmit}>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Label>Password</Label>
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Span>
                        Back to page <Link to="/login">Login.</Link>
                    </Span>
                    <Botao children="Register" />
                </Form>
            </Wrapper>
        </>
    );
};

export default Cadastro;
