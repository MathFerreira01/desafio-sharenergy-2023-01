export interface userProps {
    index: string;
    picture: {
        thumbnail: string;
    };
    email: string;

    login: {
        username: string;
    };

    dob: {
        age: number;
    };

    name: {
        first: string;
        last: string;
    };

    filteredUsers: () => void;
}
