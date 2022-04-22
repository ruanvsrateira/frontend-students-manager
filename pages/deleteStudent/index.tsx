import React from 'react';

import { useRouter } from 'next/router';

import { styles } from './styles';

import Header from '../../src/components/Header';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import axios from 'axios';

const deleteStudent: React.FC = () => { 
    const router = useRouter();
    
    const {
        query: { id, name },
    } = router
    
    const deleteStudent = async(id: number) => {
        const data = await axios.get(`http://localhost:3333/students/${id}/delete`);

        window.location.href = "/"
    }


    return(
        <>
            <Header />
           
            <Container
                style={styles.mainContainer}
            >
                <Typography
                    style={styles.title}
                >
                    Realmente deseja deletar o aluno { name } ?
                </Typography>
                <Box
                    marginTop="20px"
                >
                    <Button
                        style={styles.confirmButton}
                        onClick={() => deleteStudent(Number(id))}
                    >
                        Deletar
                    </Button>
                    <Link href="/" passHref>
                        <Button
                            style={styles.cancelButton}
                        >
                            Cancelar
                        </Button>
                    </Link>
                </Box>
            </Container>
        </>
    );
};

export default deleteStudent;