import styled from 'styled-components';
import { TextField } from '../../components/Input/style'; 


export const Container = styled.section`
    margin: 8em 7em 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SearchInput = styled(TextField)`
    width: 50%;
    margin-bottom: 2em;
`;

export const WrapperPagination = styled.div`
    padding: 3em;
`;