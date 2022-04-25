import React, { HTMLProps } from 'react';
import InputMask from 'react-input-mask';
import { Container } from './styled';

interface Iinput extends React.InputHTMLAttributes<HTMLInputElement> {
    mask?: string;
    helperText?: string;
    error?: boolean;
  }

const Input = ({mask, error, helperText, ...props }: Iinput) => {
    if(mask) {
        return(
            <Container>
                <InputMask
                    mask={mask}
                    className="input"
                    { ...props }
                />
                <small color="red">{error && helperText}</small>
            </Container>
        );
    } else {
        return(
            <Container>
                <input 
                    className="input"
                    { ...props }
                />
            </Container>
        );
    }
};

export default Input;