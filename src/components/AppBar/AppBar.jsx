import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";
import { Navigation } from "components/Navigation";
import { AuthNav } from "components/AuthNav";
import { UserMenu } from "components/UserMenu";

import { Header } from "./AppBar.styled";

export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
}