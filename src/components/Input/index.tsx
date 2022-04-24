import React, { HTMLProps } from 'react';

import { TextField } from '@mui/material';
import { Formik } from 'formik';



const Input = ({ ...resProps }) => {
    return(
        <TextField
            style={{
                width: "60%",
            }}
            { ...resProps }
        />
    );
};

export default Input;