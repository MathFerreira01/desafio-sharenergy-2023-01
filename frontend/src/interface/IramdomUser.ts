export interface userProps {
    index: number;
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


export interface IRamdomUser {
    index: number;
    photo:string;
    firstname:string;
    lastName:string;
    email:string;
    username:string;
    age:number; 
}