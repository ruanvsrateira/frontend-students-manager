import { Button, Container, Typography, FormControl, TextField } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';
import { useRouter } from 'next/router';
import { ArrowBack, FormatItalic } from '@mui/icons-material'
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { StudentSchema } from '../../validators/createStudentForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useFormik, Formik, Form, Field } from 'formik';
import { route } from 'next/dist/server/router';

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

    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            cpf: "",
            age: "",
        },
        onSubmit: async() => {
            alert(123)
        },

        validationSchema: StudentSchema
    })

    const addStudent = async() => {

        const dataUser: IdataUser = {
            name: (document.querySelector("#nameField") as HTMLInputElement).value,
            email: (document.querySelector("#emailField") as HTMLInputElement).value,
            cpf: (document.querySelector("#cpfField") as HTMLInputElement).value,
            age: Number((document.querySelector("#ageField") as HTMLInputElement).value),
        }
            await api.post("/students", {
                name: `${dataUser.name}`,
                email: `${dataUser.email}`,
                cpf: `${dataUser.cpf}`,
                age: Number(dataUser.age)
            }).then(({ data }) => {
                console.log(data);
                console.log(dataUser)
                router.push("/", { query: { status: "user_created" } })
            }).catch(e => console.log(e))
        
    }

    return(
        <>
            <Header />
        
            <ToastContainer />

            
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
                        onSubmit={formik.handleSubmit}
                    >
                        <Input
                            label="digite seu nome"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />

                        <Input
                            label="digite seu e-mail"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />

                        <Input
                            label="digite seu cpf"
                            name="cpf"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                        />

                        <Input
                            label="digite sua idade"
                            name="age"
                            value={formik.values.age}
                            onChange={formik.handleChange}
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
                    </form>
        </>
    );
};

export default addStudent;