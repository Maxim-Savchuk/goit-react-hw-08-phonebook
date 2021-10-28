import styled from "@emotion/styled";
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const Container = styled.div`
  width: 320px;
  height: auto;
  padding: 20px 30px;
  border: 2px solid grey;
  border-radius: 4px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 200px;
  border-radius: 4px;
  padding: 2px 7px;
  height: 20px;
  border: 2px solid black;
  margin-top: 7px;
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
  margin-top: 20px;
  background-color: transparent;
  border-radius: 4px;
  border: none;
  font-size: 12px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 4px rgba(0, 0, 0, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
  transition: all 250ms ease-in;
  &:hover,
  &:focus{
    color: rgb(73, 167, 230);
    box-shadow: 0px 1px 4px rgba(73, 167, 230, 0.12), 0px 4px 4px rgba(73, 167, 230, 0.06),
    1px 4px 4px rgba(73, 167, 230, 0.16), 0px 1px 1px rgba(73, 167, 230, 0.12);
  }
`;

export const Plus = styled(AiOutlinePlusCircle)`
  font-size: 20px;
  margin: 0 0 0 6px;
`;