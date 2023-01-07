import { InputHTMLAttributes } from 'react';
import { TextField } from './style';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <TextField
            type={props.type}
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
};

export default Input;
