import React from 'react';
import Header from '../../components/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Button, Container, Typography } from '@mui/material';
import { NextPage } from 'next';
import { api } from '../../services/api';
import { route } from 'next/dist/server/router';


const DeleteStudent: NextPage = () => { 
    const router = useRouter();
    const {
        query: { name, id }
    } = router; 

    const DeleteStudentService = async() => {
        api.get(`/students/${id}/delete`).then(() => router.push("/")).catch((e) => console.log(e));
    };

    return(
        <>
            <Header />
           
            <Container
                style={{ 
                    justifyContent: "start",    
                    margin: "100px auto 0px auto" 
                }}
            >
                <Typography
                    style={{
                        fontFamily: "Poppins",
                        color: "#4a4a4a",
                        fontSize: "30px",
                    }}
                >
                    Realmente deseja deletar o aluno {name}?
                </Typography>
                <Box
                    marginTop="20px"
                >
                    <Button
                        style={{
                            backgroundColor: "rgb(0 232 143)",
                            color: "#fff"
                        }}
                        onClick={DeleteStudentService}
                    >
                        Deletar
                    </Button>
                    <Link href="/" passHref>
                        <Button
                            style={{
                                backgroundColor: "#E53E3E",
                                marginLeft: "10px",
                                color: "#fff"
                            }}
                        >
                            Cancelar
                        </Button>
                    </Link>
                </Box>
            </Container>
        </>
    );
};

export default DeleteStudent;