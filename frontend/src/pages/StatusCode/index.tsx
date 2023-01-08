import { useEffect, useState } from 'react';
import { Container, SearchStatus, WrapperImage, Image, Text } from './style';

import Header from '../../components/Navbar';
import getStatusCodeServices from '../../services/statusCode/getStatusCode';

const Status = () => {
    const [status, setStatus] = useState();
    const [inputValue, setInputValue] = useState('');

    const getStatusCode = async () => {
        const response = await getStatusCodeServices();
        if (!response.error) {
            setStatus(response);
        }
    };

    useEffect(() => {
        getStatusCode();
    }, []);

    return (
        <>
            <Header />
            <Text>HTTP Cats</Text>
            <Container>
                <SearchStatus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search for the status code you want"
                />
                <WrapperImage>
                    <Image src={`https://http.cat/${inputValue}.jpg`} />
                </WrapperImage>
            </Container>
        </>
    );
};

export default Status;
