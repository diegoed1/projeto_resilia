import React from "react";
import { Button, Header as HeaderWrapper, Title, Container } from "./styles";
import MoonIcon from "../../assets/icon-moon.svg";
import SunIcon from "../../assets/icon-sun.svg";

function Header({ changeTheme, theme }) {
  return (
    <HeaderWrapper>
      <Container>
        <Title>TODO</Title>
        <Button onClick={changeTheme}>
          {theme === true ? (
            <img src={MoonIcon} alt="" />
          ) : (
            <img src={SunIcon} alt="" />
          )}
        </Button>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;