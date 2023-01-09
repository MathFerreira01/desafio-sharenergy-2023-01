export interface dogsProps {
    fileSize: number;
    url: string;
}

export interface Idog {
    getDogs: () => void;
    fileSize: number;
    dog?: {
        url: string;
    }
    dogs?: string;
}