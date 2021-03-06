import { AppBar, Button, Toolbar } from '@mui/material';
import Link from 'next/link';
import { styles } from './styles';
import React from 'react';


const Header: React.FC = () => {
    return(
        <div>
            <AppBar style={{ position: "initial" }}>
                <Toolbar style={styles.toolbar}>
                    <Link href="/addStudent" passHref>
                        <Button style={styles.buttonAddStudents}>
                            Add students
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;