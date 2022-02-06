import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { signUp } from "redux/auth/authOperations";

import {
    Container,
    Title,
    Form,
    Label,
    Input,
    Button,
    NameIcon,
    EmailIcon,
    PasswordIcon,
    SignupIcon,
    ErrorValidation
} from "./RegisterPage.styled";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit, reset } = useForm({ mode: 'onBlur' });

    const onFormSubmit = data => {
        userSubmit(data);
        reset();
    }

    const userSubmit = (data) => {
        dispatch(signUp(data))
    }

    return (
        <Container>
            <Title>Sign up to <span>Phonebook</span> app</Title>
            <Form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
                <Label>
                    <span>Name <NameIcon /></span>
                    <Input type="name"
                        {...register('name', {
                            required: 'Это обязательное поле'
                        })}
                    />
                </Label>
                <ErrorValidation>{errors?.name && <p>{errors?.name.message || 'Error'}</p>}</ErrorValidation>
                <Label>
                    <span>Email <EmailIcon /></span>
                    <Input type="email"
                        {...register('email', {
                            required: 'Это обязательное поле'
                        })} />
                </Label>
                <ErrorValidation>{errors?.email && <p>{errors?.email.message || 'Error'}</p>}</ErrorValidation>
                <Label>
                    <span>Password <PasswordIcon /></span>
                    <Input type="password"
                        {...register('password', {
                            required: 'Это обязательное поле',
                            minLength: {
                                value: 8,
                                message: 'Минимум 8 символов'
                            }
                        })}
                    />
                </Label>
                <ErrorValidation>{errors?.password && <p>{errors?.password.message || 'Error'}</p>}</ErrorValidation>
                <Button type="submit">Register now<SignupIcon /></Button>
            </Form>
        </Container>
    )
}

export default RegisterPage;