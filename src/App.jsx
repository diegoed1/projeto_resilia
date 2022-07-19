import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./globalStyle";
import { useState } from "react";
import Input from "./components/Input";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header changeTheme={changeTheme} theme={theme} />
      <ToDoContainer />
    </ThemeProvider>
  );
}

export default App;