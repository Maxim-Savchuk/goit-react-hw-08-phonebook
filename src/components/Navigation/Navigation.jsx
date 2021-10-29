import { Container, StyledNavLink } from "./Navigation.styled"

export const Navigation = () => {
    return (
        <Container>
            <StyledNavLink exact to="/" activeClassName="active">Home</StyledNavLink>
            <StyledNavLink to="/contacts" activeClassName="active">Contacts</StyledNavLink>
        </Container>
    )
}