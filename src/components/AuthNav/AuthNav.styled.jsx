import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 50px;
`;

export const StyledNavLink = styled(NavLink)`
    color: #020202;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    padding: 16px 0;
    transition: all 0.2s ease-in;
    &:not(:last-child) {
        margin-right: 30px;
    }
    &.active ,
    &:hover,
    &:focus {
        color: rgb(55, 150, 214);
    }
`;