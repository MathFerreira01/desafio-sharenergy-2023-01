import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/Firebase/firebaseConfig';

import { Wrapper, Title, Form, Label, Span, ContainerCheckBox } from './style';

import Input from '../../components/Input';
import Botao from '../../components/Button';
import Checkbox from '@mui/material/Checkbox';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

        if (error) {
            const notify = toast.error(error.message);
            notify;
            return;
        }

        if (user) {
            if (remember) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            navigate('/');
        }
    };

    useEffect(() => {
        const user = localStorage.getItem('user');
        const userParsed = user ? JSON.parse(user) : null;

        if (userParsed) {
            navigate('/');
        }
    }, []);

    const handleChangeCheckbox = () => {
        setRemember(!remember);
    };

    return (
        <>
            <ToastContainer />
            <Wrapper>
                <Title>Log in to access your account</Title>
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
                    <ContainerCheckBox>
                        <Checkbox
                            value={remember}
                            onChange={handleChangeCheckbox}
                        />
                        <Span>Remember me</Span>
                    </ContainerCheckBox>

                    <Span>
                        Do not have an account yet?{' '}
                        <Link to="/cadastro">Register</Link>
                    </Span>
                    <Botao children="Login" />
                </Form>
            </Wrapper>
        </>
    );
};

export default Login;
