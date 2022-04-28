import React, { HTMLProps } from 'react';
import InputMask from 'react-input-mask';
import { Container, ContentError } from './styled';
 

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
                    className={error ? ("input error") : ("input")}
                    { ...props }
                />
                { helperText && error ? (
                    <ContentError>
                        <h3>{helperText}</h3>
                    </ContentError>
                ) : (null) }
            </Container>
        );
    } else {
        return(
            <Container>
                <input 
                    className={error ? ("input error") : ("input")}
                    { ...props }
                />
                { helperText && error ? (
                    <ContentError>
                        <h3>{helperText}</h3>
                    </ContentError>
                ) : (null) }
            </Container>
        );
    }
};

export default Input;