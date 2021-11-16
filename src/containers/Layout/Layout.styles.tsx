import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, #__next{ 
        max-height: 100vh;
        margin: 0;
        font-family: ${(props) => props.theme.fontFamily};
        color: ${(props) => props.theme.colors.text};
        border 1px solid red
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
`;
