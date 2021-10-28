import { Container, StyledNavLink } from "./Navigation.styled"

export const Navigation = () => {
    return (
        <Container>
            <StyledNavLink exact to="/">Home</StyledNavLink>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </Container>
    )
}