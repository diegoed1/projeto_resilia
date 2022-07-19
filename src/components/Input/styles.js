import styled from "styled-components";

export const InputBox = styled.input`
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.theme.backgroundColor};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding-left: 24px;
  color: ${(props) => props.theme.primary};
  &::placeholder {
    color: ${(props) => props.theme.primary};
  }
`;