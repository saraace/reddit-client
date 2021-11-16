import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, #__next{ 
        max-height: 100vh;
        margin: 0;
        font-family: ${(props) => props.theme.fontFamily};
        color: ${(props) => props.theme.colors.text};
    }
`;

export const Container = styled.div`
	display: flex;
	height: 100vh;
`;

export const Sidebar = styled.div`
	flex: 0 0 410px;
	overflow-y: scroll;
	background: ${(props) => props.theme.colors.light100};
	padding: 28px 20px;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background: transparent;
		border-radius: 6px;
	}
	&:hover::-webkit-scrollbar-thumb,
	&:active::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.colors.inputBg};
	}
`;
