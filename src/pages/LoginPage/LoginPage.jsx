import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { logIn } from "redux/auth/authOperations";

import {
    Container,
    Title,
    Form,
    Label,
    Input,
    Button,
    EmailIcon,
    PasswordIcon,
    LoginIcon,
    ErrorValidation
} from "./LoginPage.styled";

const LoginPage = () => {
    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit, reset } = useForm({ mode: 'onBlur' });

    const onFormSubmit = data => {
        userSubmit(data);
        reset();
    }

    const userSubmit = (data) => {
        dispatch(logIn(data))
    }

    return (
        <Container>
            <Title>Log in to <span>Phonebook</span> app</Title>

            <Form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
                <Label>
                    <span>Email <EmailIcon /></span>
                    <Input type="email"
                        {...register('email', {
                            required: 'Это обязательное поле'
                        })}
                    />
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

                <Button type="submit">Log in<LoginIcon /></Button>
            </Form>
        </Container>
    )
}

export default LoginPage;