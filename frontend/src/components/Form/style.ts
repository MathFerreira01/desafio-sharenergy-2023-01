import styled from 'styled-components';
import Botao from '../Button';
import Input from '../Input';

export const Container = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.section`
    width: 35%;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 1em;

    > form {
        flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Text = styled.h2`
    text-align: center;
    padding: 0.7em;
`;

export const BoxForm = styled.div`
    display: flex;

    flex-direction: column;
    padding: 1em;
`;

export const Label = styled.label`
    padding-bottom: 0.5em;
`;

export const TextField = styled(Input)`
    width: 100%;
`;

export const ButtonRegister = styled(Botao)`
    margin: 1em;
`;

export const WrapperClose = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > a {
        color: #ffffff;
        padding: 0.4em;
        border-radius: 5px;
        cursor: pointer;
        transition: ease all 0.2s;
        background: #7b7fda;
        :hover {
            background: #7b49da;
        }
    }
`;
