import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";

import { Container, Title, Form, Label, Input, Button } from "./LoginPage.styled";

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
            <Title>LogIn into <span>Phonebook</span> app</Title>

            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    Email
                    <Input type="email" name="email" value={email} onChange={handleChange} />
                </Label>

                <Label>
                    Password
                    <Input type="password" name="password" value={password} onChange={handleChange} />
                </Label>

                <Button type="submit">Log in</Button>
            </Form>
        </Container>
    )
}

export default LoginPage;