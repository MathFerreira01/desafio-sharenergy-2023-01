import { useState } from 'react';
import {
    Container,
    WrapperStatus,
    SearchStatus,
    WrapperImage,
    Image,
    Text,
} from './style';

import Header from '../../components/Navbar';

const Status = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <Header />
            <Container>
                <Text>HTTP Cats</Text>
                <WrapperStatus>
                    <SearchStatus
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Search for the status code you want"
                    />
                    <WrapperImage>
                        <Image src={`https://http.cat/${inputValue}.jpg`} />
                    </WrapperImage>
                </WrapperStatus>
            </Container>
        </>
    );
};

export default Status;
