import { createContext, useState, ReactElement } from 'react';
import { usersProps } from '../interface/users';

const initialState = {
    name: '',
    email: '',
    phone: '',
    adress: '',
    cpf: '',
};

export const UserContext = createContext<usersProps>({
    client: {
        name: '',
        email: '',
        phone: '',
        adress: '',
        cpf: '',
    },
    setClient: () => {},
});

export const UserProvider = ({ children }: { children: ReactElement }) => {
    const [client, setClient] = useState(initialState);

    return (
        <UserContext.Provider
            value={{
                client,
                setClient,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
