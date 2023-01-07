import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export const Container = styled(Card)`
    width: 30%;
    height: 215px;
    min-width: 500px;
    margin: 1em;
`;

export const Span = styled.span`
    font-size: 1em;
    font-weight: 700;
`;

export const Wrapper = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const BoxTextField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em 0 1em 0;
`;

export const WrapperButton = styled(CardActions)`
    display: flex;
    justify-content: space-between;
`;