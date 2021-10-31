import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 20px;
  color: rgb(73, 167, 230);
`;


export const Input = styled.input`
  width: 200px;
  border-radius: 4px;
  padding: 2px 7px;
  height: 20px;
  border: 2px solid #56555a;
  margin-top: 10px;
  margin-right: 25px;
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
// export const Input = styled.input`
//   width: 200px;
//   border-radius: 4px;
//   padding: 2px 7px;
//   height: 20px;
//   border: 2px solid black;
//   margin-top: 7px;
//   margin-right: 25px;
//   transition: all 300ms ease-in;
//   &:hover,
//   &:focus {
//     border-radius: 4px;
//     outline: none;
//     border: 2px solid rgb(73, 167, 230);
//   }
// `;