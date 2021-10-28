import { Navigation } from "components/Navigation";
import { AuthNav } from "components/AuthNav";
import { UserMenu } from "components/UserMenu";

import { Header } from "./AppBar.styled";

export const AppBar = () => {
    return (
        <Header>
            <Navigation />
            <AuthNav />
            <UserMenu />
        </Header>
    )
}