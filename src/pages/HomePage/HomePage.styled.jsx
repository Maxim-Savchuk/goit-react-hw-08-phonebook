import styled from "@emotion/styled";
import { GiShakingHands } from 'react-icons/gi';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
`;

export const Title = styled.h2`
    align-items: center;
    font-weight: 500;
    font-size: 48px;
    text-align: center;
    color: rgb(59, 151, 212);
    & > span{
        color: #56555a;
    }
`;

export const HandsIcon = styled(GiShakingHands)`
    font-size: 52px;
    margin-left: 10px;
    color: #56555a;
`;