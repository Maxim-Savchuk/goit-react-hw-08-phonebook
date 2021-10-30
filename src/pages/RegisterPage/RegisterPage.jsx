import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";

import { Container, Title, Form, Label, Input, Button } from "./RegisterPage.styled";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
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
        dispatch(register({ name, email, password }));
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <Container>
            <Title>SignUp into <span>Phonebook</span> app</Title>

            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    Name
                    <Input type="name" name="name" value={name} onChange={handleChange} />
                </Label>

                <Label>
                    Email
                    <Input type="email" name="email" value={email} onChange={handleChange} />
                </Label>

                <Label>
                    Password
                    <Input type="password" name="password" value={password} onChange={handleChange} />
                </Label>

                <Button type="submit">Register now</Button>
            </Form>
        </Container>
    )
}

export default RegisterPage;