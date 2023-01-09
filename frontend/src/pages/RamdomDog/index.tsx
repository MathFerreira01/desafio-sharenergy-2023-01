import Header from '../../components/Navbar';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import { getDogsServices } from '../../services/RamdomDog/getDogs';
import { dogsProps } from '../../interface/IDogs';
import { Container } from './style';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RamdomDog = () => {
    const [dogs, setDogs] = useState<dogsProps>();

    const getDogs = async () => {
        const response = await getDogsServices();

        if (response) {
            setDogs(response);
            return;
        }
        const notifyErrorDogs = toast.error('Unable to locate random dogs.');
        notifyErrorDogs;
    };

    useEffect(() => {
        getDogs();
    }, []);
    return (
        <>
            <ToastContainer />
            <Header />
            <Container>
                <Card dogs={dogs?.url} getDogs={getDogs} fileSize={0} />
            </Container>
        </>
    );
};

export default RamdomDog;
