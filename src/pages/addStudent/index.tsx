import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { StudentSchema } from '../../validators/createStudentForm';
import { useFormik } from 'formik';

if(typeof window !== "undefined") {
    injectStyle();
}

interface IdataUser {
    name: string,
    email: string,
    cpf: string,
    age: number,
};

const addStudent: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            cpf: "",
            age: 0,
        },
        onSubmit: async(data) => {
            const response = await addStudent(data)

            console.log("Response: ", response)
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
                toast.error(`${data.error}`, 
                    { position: toast.POSITION.TOP_LEFT }
                )
            } else {
                router.push("/")
            }
        }).catch(e => console.log(e))
    }

    return(
        <>
            <Header />
            <ToastContainer />
            <Container
                style={{
                    marginTop: "100px",
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
                <Container
                    style={{
                        display: "flex",
                        marginTop: "50px",
                        flexDirection: "column",
                    }}
                >
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap:"20px",
                            alignItems: "center"
                        }}
                        onSubmit={formik.handleSubmit}
                    >
                        <Input
                            label="Nome"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            helperText={formik.errors.name}
                            error={!!formik.errors.name && formik.touched.name}
                        />
                        <Input
                            label="E-mail"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            helperText={formik.errors.email}
                            error={!!formik.errors.email && formik.touched.email}
                        />
                        <Input
                            label="CPF"
                            name="cpf"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                            helperText={formik.errors.cpf}
                            error={!!formik.errors.cpf && formik.touched.cpf}
                        />
                        <Input
                            label="Age"
                            name="age"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            helperText={formik.errors.age}
                            error={!!formik.errors.age && formik.touched.age}
                        />
                        <Button
                            type="submit"
                            style={{
                                backgroundColor: "rgb(0 232 143)",
                                color: "#fff",
                                height: "50px",
                                width: "200px",
                            }}
                        >
                            Confirmar
                        </Button>

                        <Button
                            style={{
                                backgroundColor: "rgb(229, 62, 62)",
                                height: "50px",
                                color: "rgb(255, 255, 255)",
                                width: "200px",
                            }}
                            onClick={() => router.push("/") }
                        >
                            Cancelar
                        </Button>
                    </form>
                </Container>
            </Container>
        </>
    );
};

export default addStudent;