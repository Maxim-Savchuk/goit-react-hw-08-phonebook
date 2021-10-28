import { Container, StyledNavLink } from "./AuthNav.styled"

export const AuthNav = () => {
    return (
        <Container>
            <StyledNavLink to="/register">SignUp</StyledNavLink>
            <StyledNavLink to="/login">LogIn</StyledNavLink>
        </Container>
    )
}