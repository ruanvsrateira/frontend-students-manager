import * as yup from 'yup';

export const StudentSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    cpf: yup.string().required(),
    age: yup.number().required()
})
