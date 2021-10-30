import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";
import { Container, StyledNavLink } from "./Navigation.styled"

export const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Container>
            <StyledNavLink exact to="/" activeClassName="active">Home</StyledNavLink>
            {isLoggedIn && <StyledNavLink to="/contacts" activeClassName="active">Contacts</StyledNavLink>}
        </Container>
    )
}