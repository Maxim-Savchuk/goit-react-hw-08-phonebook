import styled from "@emotion/styled";
import { RiContactsBookLine } from 'react-icons/ri';
import { MdPeopleAlt } from 'react-icons/md';

export const Container = styled.div`
  padding: 15px 0 0 0;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

export const ListContainer = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const PhonebookTitle = styled.h1`
  font-size: 28px;
  display: flex;
  align-items: center;
  color: #56555a;
  transition: all 300ms ease-in;
  &:hover{
    color: rgb(73, 167, 230);
  }
`;

export const ContactsTitle = styled.h2`
  margin: 10px 0 10px 0;
  display: flex;
  align-items: center;
  color: #56555a;
  transition: all 300ms ease-in;
  &:hover{
    color: rgb(73, 167, 230);
  }
`;

export const PhonebookIcon = styled(RiContactsBookLine)`
  font-size: 27px;
  color: rgb(73, 167, 230);
  margin: 0 0 0 10px;
`;

export const PeopleIcon = styled(MdPeopleAlt)`
  font-size: 27px;
  color: rgb(73, 167, 230);
  margin: 0 0 0 10px;
`;