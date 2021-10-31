import styled from "@emotion/styled";
import { FaTrashAlt } from 'react-icons/fa';

export const List = styled.ul`
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-weight: 500;
  font-size: 18px;
  border: 2px solid rgb(73, 167, 230);
  color: #56555a;
  border-radius: 4px;
  width: 360px;
  margin-top: 5px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid rgb(73, 167, 230);
  color: #56555a;
  border-radius: 4px;
  font-size: 12px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 250ms ease;
  &:hover,
  &:focus{
    background-color: rgb(73, 167, 230);
    color: #fff; 
  }
`;

export const Trash = styled(FaTrashAlt)`
  font-size: 12px;
  margin: 0 0 0 6px;
`;