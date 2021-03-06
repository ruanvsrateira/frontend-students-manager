import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Button, Container, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { alertToast } from '../../services/toast';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { StudentSchema } from '../../validators/StudentSchema';
import { useFormik } from 'formik';
import { NextPage } from 'next';
import { api } from '../../services/api';

if(typeof window !== "undefined") {
    injectStyle();
}

interface IdataUser {
    name: string,
    email: string,
    cpf: string,
    age: number | undefined,
};

const AddStudent: NextPage = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            cpf: "",
            age: undefined,
        },
        onSubmit: async(data) => {
            const response = await addStudent(data);

            console.log(response)
        },

        validationSchema: StudentSchema
    })

    const addStudent = async(dataUser:IdataUser) => {
        await api.post("/students", {
            name: `${dataUser.name}`,
            email: `${dataUser.email}`,
            cpf: `${dataUser.cpf}`,
            age: Number(dataUser.age)
        }).then(({ data }) => {
            if(data.error) {
                alertToast(`${data.error}`, "error")
            } else {
                router.push("/")
            }
        }).catch(e => console.log(e))
    };

    return(
        <>
            <Header />
            <ToastContainer />
            <Container
                style={{
                    marginTop: "100px",
                }}
            >
                <Container
                    style={{
                        display: "flex",
                        margin: "auto auto",
                        flexDirection: "column",
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
                    <form
                        style={{
                            display: "flex",
                            marginTop: "20px",
                            flexDirection: "column",
                            gap:"20px",
                            alignItems: "center"
                        }}
                        onSubmit={formik.handleSubmit}
                    >
                        <Input
                            placeholder="Nome"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={!!formik.errors.name && formik.touched.name}
                            helperText={formik.errors.name}
                        />
                        <Input
                            placeholder="E-mail"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={!!formik.errors.email && formik.touched.email}
                            helperText={formik.errors.email}
                        />
                        <Input
                            placeholder="CPF"
                            name="cpf"
                            mask="999.999.999-99"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                            error={!!formik.errors.cpf && formik.touched.cpf}
                            helperText={formik.errors.cpf}
                        />
                        <Input
                            placeholder="Age"
                            name="age"
                            type="number"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            error={!!formik.errors.age && formik.touched.age}
                            helperText={formik.errors.age}
                        />
                        <Container
                            style={{
                                width: "100%",
                                flexDirection: "column",      
                                gap: "10px",
                                display: "flex",
                                margin: "auto",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Button
                                style={{
                                    backgroundColor: "rgb(229, 62, 62)",
                                    height: "50px",
                                    color: "rgb(255, 255, 255)",
                                    width: "200px",
                                    gap: "5px"
                                }}
                                onClick={() => router.push("/") }
                            >
                                <ArrowBack />
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                style={{
                                    backgroundColor: "rgb(0 232 143)",
                                    color: "#fff",
                                    height: "50px",
                                    width: "200px",
                                    gap: "5px"
                                }}
                            >
                                Confirmar
                                <ArrowForward />
                            </Button>
                        </Container>
                    </form>
                </Container>
            </Container>
        </>
    );
};

export default AddStudent;