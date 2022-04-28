import * as yup from 'yup';
import { validateCPF } from '../utils/validateCPF';

export const StudentSchema = yup.object().shape({
    name: yup.string().required("required field name"),
    email: yup.string().required("required field email"),
    cpf: yup.string().required("required field CPF")
        .test("is-cpf", "CPF invalid", value => value ? validateCPF(value) : true),
    age: yup.number().required("required field age")
})
