import { useEffect, useState } from 'react';

import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Loader } from '../Loader';

import Botao from '../Button';
import { ContainerCard, WrraperButton, Text } from './style';

import { dogsProps } from '../../interface/dogs';
import { getDogsServices } from '../../services/RamdomDog/getDogs';

const CardStatusCode = () => {
    const [dogs, setDogs] = useState<dogsProps>();
    const [loading, setLoading] = useState(false);

    const getDogs = async () => {
        const response = await getDogsServices();
        if (!response.error) {
            setDogs(response);
        }
    };

    useEffect(() => {
        getDogs();
    }, []);

    return (
        <>
            <Text>Click refresh to view a random dog</Text>

            <ContainerCard sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia component="img" height="300" image={dogs?.url} />
                </CardActionArea>
                <WrraperButton>
                    <Botao children="Refresh" onClick={getDogs} />
                </WrraperButton>
            </ContainerCard>
        </>
    );
};

export default CardStatusCode;
