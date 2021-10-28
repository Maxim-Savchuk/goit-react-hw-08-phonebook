import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 50px;
`;

export const UserMail = styled.span`
    margin: 0 15px 0 0;
    font-size: 18px;
`;

export const Button = styled.button`
    padding: 6px 12px;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 4px rgba(0, 0, 0, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
    transition: all 0.2s ease-in;
    &:hover,
    &:focus {
        color: rgb(55, 150, 214);
    }
    & > span{
        font-size: 18px;
    }
`;

