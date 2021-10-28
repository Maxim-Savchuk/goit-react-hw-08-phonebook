import { useState } from "react";

import { Container } from "./LoginPage.styled";

export const LoginPage = () => {
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

        resetForm();
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <Container>
            <h2>LoginPage</h2>

            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                    Email
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </label>

                <label>
                    Password
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </label>

                <button type="submit">Enter</button>
            </form>
        </Container>
    )
}