import styled from "@emotion/styled";
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GoSignIn } from 'react-icons/go';

export const Container = styled.div`
  padding: 15px 0 0 0;
  max-width: 420px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #56555a;
  & > span{
    color: rgb(55, 150, 214);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 0;
  border: 2px solid rgb(73, 167, 230);
  border-radius: 6px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
  color: rgb(73, 167, 230);
  &:not(:first-of-type){
    margin-top: 16px;
  }
  & > span {
    display: flex;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 260px;
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
  width: 190px;
  margin-top: 30px;
  background-color: rgb(73, 167, 230);
  border: 2px solid rgb(73, 167, 230);
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  padding: 7px 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 300ms ease-in;
  &:hover,
  &:focus{
    border: 2px solid rgb(73, 167, 230);
    background-color: transparent;
    color: rgb(73, 167, 230);
  }
`;

export const EmailIcon = styled(HiOutlineMail)`
    font-size: 22px;
    margin-left: 6px;
    margin-top: 3px;
`;

export const PasswordIcon = styled(RiLockPasswordLine)`
    font-size: 22px;
    margin-left: 6px;
    margin-top: 3px;
`;

export const LoginIcon = styled(GoSignIn)`
    font-size: 16px;
    margin-left: 6px;
`;
