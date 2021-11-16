import styled from "styled-components";

export const InputWrapper = styled.div`
	position: relative;
`;

export const StyledInput = styled.input`
	background: ${(props) => props.theme.colors.inputBg};
	border: none;
	border-radius: 10px;
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.inputText};
	padding: 16px 18px;
	display: block;
	width: 100%;
	margin: 0 0 20px;
	outline: none;
	z-index: 1;

	&::placeholder {
		color: ${(props) => props.theme.colors.inputText};
	}
`;

export const Spinner = styled.div`
	position: absolute;
	top: 50%;
	right: 10px;
	z-index: 1;
	transform: translateY(-50%);
	color: ${(props) => props.theme.colors.inputText};
`;
