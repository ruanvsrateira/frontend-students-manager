import * as yup from 'yup';
import { validateCPF } from '../utils/validateCPF';

export const StudentSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    cpf: yup.string().required()
        .test("is-cpf", "CPF inválido", value => value ? validateCPF(value) : true),
    age: yup.number().required()
})
