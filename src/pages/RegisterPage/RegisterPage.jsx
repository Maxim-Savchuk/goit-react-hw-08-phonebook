import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";

import { Container } from "./RegisterPage.styled";

export const RegisterPage = () => {
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
            <h2>RegisterPage</h2>

            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                    Name
                    <input type="name" name="name" value={name} onChange={handleChange} />
                </label>

                <label>
                    Email
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </label>

                <label>
                    Password
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </label>

                <button type="submit">Register now</button>
            </form>
        </Container>
    )
}