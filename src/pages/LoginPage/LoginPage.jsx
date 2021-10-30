import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";

import { Container } from "./LoginPage.styled";

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

                <button type="submit">Log in</button>
            </form>
        </Container>
    )
}

export default LoginPage;