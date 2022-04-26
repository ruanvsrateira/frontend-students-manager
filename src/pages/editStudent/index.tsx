/* eslint-disable react-hooks/rules-of-hooks */
import Header from '../../components/Header';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { Container, Typography, Button } from '@mui/material';
import Input from '../../components/Input';
import { useFormik } from 'formik';
import { StudentSchema } from '../../validators/StudentSchema';
import { useRouter } from 'next/router';
import api from '../../services/api';

if(typeof window !== "undefined") {
    injectStyle();
}

const editStudent: React.FC = () => {
     // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const {
        query: { id, name, email, cpf, age }
    } = router;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik({
        initialValues:{
            name,
            email,
            cpf,
            age,
        },
        onSubmit: async(data) => {
            await api.post(`students/${id}/edit`, {
                name: `${data.name}`,
                email: `${data.email}`,
                cpf: `${data.cpf}`,
                age: Number(data.age),
            }).then(({data}) => {   
                if(data.error) {
                    toast.error(`${data.error}`, 
                        { position: toast.POSITION.TOP_LEFT }
                    )
                } else {
                    router.push("/");
                }
            }).catch(e => console.log("ERRO:", e))
        },

        validationSchema: StudentSchema,
    });

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
                        Edit Student {name}
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
                        />
                        <Input
                            placeholder="E-mail"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={!!formik.errors.email}
                        />
                        <Input
                            placeholder="CPF"
                            name="cpf"
                            mask="999-999-999-99"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                            error={!!formik.errors.cpf && formik.touched.cpf}
                        />
                        <Input
                            placeholder="Age"
                            name="age"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            error={!!formik.errors.age && formik.touched.age}
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
                                Salvar alterações
                            </Button>
                        </Container>
                    </form>
                </Container>
            </Container>
        </>
    );
};

export default editStudent;