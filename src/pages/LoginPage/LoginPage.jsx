import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";

import { Container, Title, Form, Label, Input, Button, EmailIcon, PasswordIcon, LoginIcon } from "./LoginPage.styled";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
        resetForm();
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <Container>
            <Title>Log in to <span>Phonebook</span> app</Title>

            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    <span>Email <EmailIcon /></span>
                    <Input type="email" name="email" value={email} onChange={handleChange} />
                </Label>

                <Label>
                    <span>Password <PasswordIcon /></span>
                    <Input type="password" name="password" value={password} onChange={handleChange} />
                </Label>

                <Button type="submit">Log in<LoginIcon /></Button>
            </Form>
        </Container>
    )
}

export default LoginPage;