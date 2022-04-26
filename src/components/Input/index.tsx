import React, { HTMLProps } from 'react';
import InputMask from 'react-input-mask';
import { Container } from './styled';
 

interface Iinput extends React.InputHTMLAttributes<HTMLInputElement> {
    mask?: string;
    helperText?: string;
    error?: boolean;
  }

const Input = ({mask, error, ...props }: Iinput) => {
    if(mask) {
        return(
            <Container>
                <InputMask
                    mask={mask}
                    className={error ? ("input error") : ("input")}
                    { ...props }
                />
                <small>{error ? (error) : (null)}</small>
            </Container>
        );
    } else {
        return(
            <Container>
                <input 
                    className={error ? ("input error") : ("input")}
                    { ...props }
                />
            </Container>
        );
    }
};

export default Input;