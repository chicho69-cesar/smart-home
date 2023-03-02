import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Ingresa un correo electrónico válido')
    .required('Ingresa tu correo electrónico'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('Ingresa tu contraseña')
    .matches(/(?=.*\d)/, 'La contraseña debe tener al menos un numero')
    .matches(/(?=.*[a-z])/, 'La contraseña debe tener al menos una letra minuscula')
    .matches(/(?=.*[A-Z])/, 'La contraseña debe tener al menos una letra mayuscula')
    .matches(/(?=.*[!@#$%^&*])/, 'La contraseña debe tener un caracter especial')
});