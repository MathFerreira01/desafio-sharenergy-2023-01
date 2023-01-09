import Header from '../../components/Navbar';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import { getDogsServices } from '../../services/RamdomDog/getDogs';
import { dogsProps } from '../../interface/IDogs';
import { Container } from './style';

const RamdomDog = () => {
    const [dogs, setDogs] = useState<dogsProps>();

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
            <Header />
            <Container>
                <Card dogs={dogs?.url} getDogs={getDogs} fileSize={0} />
            </Container>
        </>
    );
};

export default RamdomDog;
