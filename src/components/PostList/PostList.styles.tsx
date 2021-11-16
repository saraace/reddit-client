import styled from "styled-components";

export const DismissAll = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const DismissAllButton = styled.button`
	border: none;
	background: transparent;
	color: ${(props) => props.theme.colors.lightText};
	cursor: pointer;
	opacity: 0.7;
	transition: 0.3s all ease;

	& > span {
		margin: 0 0 0 5px;
	}

	&:hover {
		color: ${(props) => props.theme.colors.blue};
		text-decoration: underline;
		opacity: 1;
	}
`;

export const Message = styled.div`
	color: ${(props) => props.theme.colors.lightText};
	font-size: 13px;
	padding: 50px 0 30px;
	text-align: center;

	span {
		margin: 0 0 0 10px;
	}
`;
