import { Container, UserMail, Button } from "./UserMenu.styled"

export const UserMenu = () => {
    return (
        <Container>
            <UserMail>max@gmail.com</UserMail>
            <Button type="button"><span>Exit</span></Button>
        </Container>
    )
}