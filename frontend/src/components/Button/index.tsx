import { Button } from './style';

interface PropsType {
    children: string;
    onClick?: () => void;
}

const Botao = (props: PropsType) => {
    return (
        <Button
            type="submit"
            className="w-full px-3 py-4 text-white bg-cyan-500 rounded-md focus:bg-cyan-600 focus:outline-none"
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    );
};

export default Botao;
