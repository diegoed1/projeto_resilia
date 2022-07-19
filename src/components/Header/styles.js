import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 35vh;
  background-image: url(${(props) => props.theme.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fafafa;
  padding-top: 10vh;
`;

export const Container = styled.div`
  width: max(35vw, 325px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  letter-spacing: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;