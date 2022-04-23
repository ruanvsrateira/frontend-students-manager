import React from 'react';

import { TextField } from '@mui/material';

interface IinputProps {
    id: string,
    required?: boolean,
    label: string,
    type?: string,
}

const Input = ({id, required, label, type}: IinputProps) => {
    return(
        <TextField
            id={id}
            required={required}
            label={label}
            type={type}
            style={{
                width: "60%"
            }}
        />
    );
};

export default Input;