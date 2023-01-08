import styled from 'styled-components';
import { TextField } from '../../components/Input/style'; 

export const Container = styled.section`
    text-align: center;
    margin-top: 2em;
    width: 100%;
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
    text-align: center;
    margin-top: 6%;

    color: #000000;
    font-size: 1.8em;
`;