import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const InfoText = styled.p`
  font-size: 0.7rem;
  color: ${(props) =>
    props.isSelected === true ? "#1058e8" : props.theme.secondary};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
  @media screen and (max-width: 992px) {
    display: ${(props) => (props.variant ? "none" : "")};
  }
`;

export const ContainerFilter = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  gap: 0.75rem;
`;