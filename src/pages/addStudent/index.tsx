import { Box, Button, Container, TextField, Typography, FormControl } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ArrowBack } from '@mui/icons-material'

import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

if(typeof window !== "undefined") {
    injectStyle();
}

const addStudent: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    
    const addStudent = async() => {

        const dataUser = {
            name: (document.querySelector("#nameField") as HTMLInputElement).value,
            email: (document.querySelector("#emailField") as HTMLInputElement).value,
            cpf: (document.querySelector("#cpfField") as HTMLInputElement).value,
            age: (document.querySelector("#ageField") as HTMLInputElement).value
        }

        if(!dataUser.name || !dataUser.email || !dataUser.cpf || !dataUser.age) {
            return(
                toast.error("É necessário preencher todos os campos",
                    { position: toast.POSITION.TOP_LEFT }
                )
            );
        }

        await axios.post("http://localhost:3333/students", {
            name: `${dataUser.name}`,
            email: `${dataUser.email}`,
            cpf: `${dataUser.cpf}`,
            age: Number(dataUser.age)
        }).then(({ data }) => {
            console.log(data);
            console.log(dataUser)
            router.push("/")
        }).catch(e => console.log(e))
    }

    return(
        <>
        <Header />
       
        <ToastContainer />

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
                    textAlign: "center"
                }}
            >
                Adicionar Student
            </Typography>
            <FormControl
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "20px",
                    gap: "20px",
                }}

                onSubmit={addStudent}
            >
                <TextField
                    id='nameField'
                    label="Name"
                    style={{
                        width: "60%"
                    }}
                />
                <TextField label="E-mail" id="emailField"
                    type="email"
                    required
                    style={{
                        width: "60%"
                    }}
                />
                <TextField label="Age" id="ageField"
                    style={{
                        width: "60%"
                    }}
                />
                <TextField label="CPF" id="cpfField"
                    style={{
                        width: "60%"
                    }}
                />
                <Button
                    type="submit"
                    style={{
                        backgroundColor: "#E53E3E",
                        color: "#fff",
                        height: "50px",
                        width: "200px",
                    }}
                    onClick={() => router.push("/")}
                >
                    <ArrowBack />
                    Back to home
                </Button>
                <Button
                    type="submit"
                    style={{
                        backgroundColor: "rgb(0 232 143)",
                        color: "#fff",
                        height: "50px",
                        width: "200px",
                    }}

                    onClick={addStudent}
                >
                    Adicionar Student
                </Button>
            </FormControl>
        </Container>
    </>
    );
};

export default addStudent;