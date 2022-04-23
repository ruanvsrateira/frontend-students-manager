import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles'

import theme from '../../config/styles/theme';
import {GlobalStyles} from '../../config/styles/GlobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <>
        <Component {...pageProps} />
        <GlobalStyles />
    </>
  );
};

export default MyApp;
