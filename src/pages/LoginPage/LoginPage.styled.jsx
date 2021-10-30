import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 15px 0 0 0;
  max-width: 420px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  & > span{
    color: rgb(55, 150, 214);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 0;
  border: 2px solid grey;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
`;

export const Input = styled.input`
  width: 260px;
  border-radius: 4px;
  padding: 4px 7px;
  height: 20px;
  border: 2px solid black;
  margin-top: 16px;
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
  background-color: transparent;
  border-radius: 4px;
  border: 2px solid grey;
  font-size: 12px;
  padding: 7px 10px;
  cursor: pointer;
  font-weight: 600;
  
  transition: all 250ms ease-in;
  &:hover,
  &:focus{
    border: 2px solid rgb(55, 150, 214);
    background-color: rgb(55, 150, 214);
    color: #fff;
  }
`;