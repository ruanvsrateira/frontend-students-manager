import { AppBar, Button, Toolbar } from '@mui/material';
import Link from 'next/link';
import { styles } from './styles';
import React from 'react';


const Header: React.FC = () => {
    return(
        <AppBar color="secondary">
            <Toolbar style={styles.toolbar}>
                <Link href="/addStudents" passHref>
                    <Button
                        style={styles.buttonAddStudents}
                    >
                        Add new Student
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;