import styled from "@emotion/styled";
import { GoSignOut } from 'react-icons/go';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 50px;
`;

export const UserMail = styled.span`
    margin: 0 15px 0 0;
    font-size: 20px;
    color: #56555a;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 2px solid rgb(73, 167, 230);
    color: #56555a;
    border-radius: 6px;
    font-size: 12px;
    padding: 5px 10px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    transition: all 250ms ease;
    &:hover,
    &:focus{
        background-color: rgb(73, 167, 230);
        color: #fff; 
    }
`;

export const ExitIcon = styled(GoSignOut)`
    font-size: 20px;
    margin-left: 6px;
`;
