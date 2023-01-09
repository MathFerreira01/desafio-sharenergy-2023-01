import CardMedia from '@mui/material/CardMedia';
import { ContainerCard, WrraperButton, Text } from './style';

import { CardActionArea } from '@mui/material';
import Botao from '../Button';

import { Idog } from '../../interface/Idogs';

const Card = ({ dogs, getDogs }: Idog) => {
    return (
        <>
            <Text>Click refresh to view a random dog</Text>

            <ContainerCard>
                <CardActionArea>
                    <CardMedia component="img" height="300" image={dogs} />
                </CardActionArea>
                <WrraperButton>
                    <Botao children="Refresh" onClick={getDogs} />
                </WrraperButton>
            </ContainerCard>
        </>
    );
};

export default Card;
