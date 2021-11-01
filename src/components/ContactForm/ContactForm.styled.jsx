import styled from "@emotion/styled";
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const Container = styled.div`
  width: 320px;
  height: auto;
  padding: 30px 15px;
  border: 2px solid rgb(73, 167, 230);
  border-radius: 4px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 22px;
  color: rgb(73, 167, 230);
  &:not(:first-of-type){
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  width: 240px;
  border-radius: 4px;
  padding: 4px 7px;
  height: 20px;
  border: 2px solid #56555a;
  margin-top: 16px;
  background-color: transparent;
  color: rgb(73, 167, 230);
  font-size: 18px;
  transition: all 300ms ease-in;
  &:hover,
  &:focus {
    border-radius: 4px;
    outline: none;
    border: 2px solid rgb(73, 167, 230);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 216px;
  margin-top: 30px;
  background-color: rgb(73, 167, 230);
  border: 2px solid rgb(73, 167, 230);
  border-radius: 4px;
  color: #56555a;
  font-size: 14px;
  padding: 5px 10px;
  font-weight: 600;
  transition: all 300ms ease-in;
  &:hover,
  &:focus{
    border: 2px solid rgb(73, 167, 230);
    background-color: transparent;
    color: rgb(73, 167, 230);
  }
`;

export const Plus = styled(AiOutlinePlusCircle)`
  font-size: 20px;
  margin: 0 0 0 6px;
`;