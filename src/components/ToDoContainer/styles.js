import styled from "styled-components";

export const Container = styled.main`
  width: max(35vw, 325px);
  height: 100%;
  margin: 0 auto;
  margin-top: -100px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

export const ListContainer = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 2px 2px 10px ${(props) => props.theme.shadow};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
`;