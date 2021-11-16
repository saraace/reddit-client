import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimatedCardWrapper = styled(motion.div)`
	overflow: hidden;
`;

export const Card = styled(motion.div)`
	display: block;
	background: #fff;
	border-radius: 10px;
	margin: 16px 0 0;
	cursor: pointer;
	font-size: 15px;
	overflow: hidden;
	border: 2px solid ${(props) => props.theme.colors.white};
	padding: 20px 24px 12px 24px;

	&:hover {
		border-color: ${(props) => props.theme.colors.light200};
	}

	&.active {
		border-color: ${(props) => props.theme.colors.blue};
	}
`;

export const CardImage = styled.div`
	flex: 0 0 100px;
	margin: 0 0 0 10px;
	height: 100px;
	position: relative;

	img {
		object-fit: cover;
	}
`;

export const CardBody = styled.div`
	display: flex;
	position: relative;
`;

export const PostDetails = styled.div`
	flex-grow: 1;
`;

export const UnreadMarker = styled(motion.div)`
	width: 6px;
	height: 6px;
	background: ${(props) => props.theme.colors.blue};
	border-radius: 50%;
	position: absolute;
	top: 5px;
	left: -13px;
`;

export const Arrow = styled.div`
	position: absolute;
	top: 50%;
	right: -15px;
	display: flex;
	justify-content: center;
	align: center;
	color: ${(props) => props.theme.colors.lightText};
	opacity: 0.3;
`;

export const Title = styled.div`
	margin: 0 0 8px;

	&.unread {
		font-weight: 700;
	}
`;

export const User = styled.div`
	color: ${(props) => props.theme.colors.lightText};
`;

export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between; 
	align-items center;
	margin: 15px 0 0;
`;

export const Meta = styled.div`
	display: flex;
	color: #94aac9;
	font-size: 13px;
	justify-content: space-between;
	align-items center;

	& > div {
		margin: 0 10px 0 0;
	}
`;

export const DismissButton = styled.button`
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
