import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const ContainerCard = styled(Card)`
    margin-top: 1em;
    width: 30%;

    @media screen and (max-width: 1024px) {
        width: 30%;
        min-width: 250px;
    }
`;

export const WrraperButton = styled(CardContent)`
    text-align: center;
`;

export const Text = styled.h2`
    color: #000000;
    text-align: center;
    font-size: 1.8em;

    @media screen and (max-width: 1024px) {
        font-size: 1.4em;
    }
`;
