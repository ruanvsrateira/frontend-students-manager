import React, { HTMLProps } from 'react';

import { TextField } from '@mui/material';
import { Formik } from 'formik';

interface IinputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
} 

const Input = ({ label, ...resProps }: IinputProps) => {
    return(
        <TextField
            style={{
                width: "60%"
            }}
            label={label}
            {...resProps}
        />
    );
};

export default Input;