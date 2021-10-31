import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/authOperations"
import { getUsername } from "redux/auth/authSelectors";

import { Container, UserMail, Button, ExitIcon } from "./UserMenu.styled"

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUsername);

    return (
        <Container>
            <UserMail>Welcome, {name}</UserMail>
            <Button type="button" onClick={() => dispatch(logOut())}>Exit<ExitIcon /></Button>
        </Container>
    )
}