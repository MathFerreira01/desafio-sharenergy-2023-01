import { Header } from '../../components/Header';
import { Container, TextField, WrapperImage, Image, Text } from './style';

import { useEffect, useState } from 'react';
import { apiCode } from '../../services/statusCode/apiStatusCode';
import { getStatusCodeServices } from '../../services/statusCode/getStatusCode';

export function Status() {
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
            <Header children="Status Code" />
            <Text>HTTP Cats</Text>
            <Container>
                <TextField
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
}
