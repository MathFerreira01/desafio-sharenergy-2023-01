import styled from 'styled-components';
import { Button } from '../Button/style';
import { Input } from '../Input';

export const Container = styled.section`
    width: 35%;
    background-color: #ffffff;
    border-radius: 10px;

    padding: 1em;
    margin: 0 auto;
    margin-top: 3em;

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
    align-items: center;
    padding: 1em;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0.5em;
`;

export const Label = styled.label`
    padding-bottom: 0.5em;
`;

export const TextField = styled(Input)`
    width: 100%;
`;

export const ButtonRegister = styled(Button)`
    margin: 1em;
`;
