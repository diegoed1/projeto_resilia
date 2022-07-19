import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Josefin Sans', 'sans-serif';
	}
	html, body, :root {
		min-height: 100vh;
	}
	body {
		background-color: ${(props) => props.theme.backgroundColor};
		color: ${(props) => props.theme.primary};
	}
`;