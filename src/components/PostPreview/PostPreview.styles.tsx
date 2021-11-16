import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
	display: block;
	background: #fff;
	border-radius: 10px;
	margin: 16px 0 0;
	cursor: pointer;
	font-size: 15px;
	overflow: hidden;
	border: 2px solid ${(props) => props.theme.colors.white};

	&:hover {
		border-color: ${(props) => props.theme.colors.light200};
	}

	&.active {
		border-color: ${(props) => props.theme.colors.blue};
	}
`;

export const CardImage = styled.div``;

export const CardBody = styled.div`
	padding: 20px 24px;
	position: relative;
`;

export const PostDetails = styled.div``;

export const UnreadMarker = styled(motion.div)`
	width: 6px;
	height: 6px;
	background: ${(props) => props.theme.colors.blue};
	border-radius: 50%;
	position: absolute;
	top: 25px;
	left: 12px;
`;

export const Title = styled(motion.div)`
	margin: 0 0 8px;

	&.unread {
		font-weight: 700;
	}
`;

export const User = styled.div`
	color: ${(props) => props.theme.colors.lightText};
`;

export const Meta = styled.div`
	display: flex;
	color: #94aac9;
	font-size: 13px;
	justify-content: space-between;
	margin: 10px 0 0;
`;
