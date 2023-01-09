import styled from 'styled-components';
import { TextField } from '../../components/Input/style';

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WrapperStatus = styled.div`
    width: 100%;
    padding: 1em;
    text-align: center;
`;

export const SearchStatus = styled(TextField)`
    width: 30%;
`;

export const WrapperImage = styled.div`
    margin-top: 1em;
`;
export const Image = styled.img`
    width: 30%;
`;

export const Text = styled.h2`
    color: #000000;
    font-size: 1.8em;
`;
