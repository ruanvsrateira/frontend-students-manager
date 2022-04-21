import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/system';

const theme: Theme = createTheme({
    palette: {
        primary: {
            main: "rgb(0 232 143)",
        },
        secondary: {
            main: "rgb(35 34 40)"
        }
    }
});

export default theme;