import styled from "styled-components";

export const Icon = styled.span`
  display: flex;
  visibility: ${(props) => (props.isCompleted ? "visible" : "hidden")};
  justify-content: center;
  align-items: center;
  width: 24px;
  opacity: ${(props) => (props.isCompleted ? "1" : "0")};
  transition: all ease-in-out 0.05s;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 5px;
  border-bottom: ${(props) => `1px solid ${props.theme.tertiary}`};
  &:hover {
    cursor: pointer;
  }
  &:hover ${Icon} {
    opacity: 1;
    visibility: visible;
  }
`;

export const TitleItem = styled.p`
  flex-grow: 1;
  font-size: 1rem;
  color: ${(props) => props.theme.primary};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "")};
  opacity: ${(props) => (props.isCompleted ? "0.55" : "")};
`;