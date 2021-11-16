import Image from "next/image";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faArchive } from "@fortawesome/free-solid-svg-icons";
import theme from "../../containers/Theme/Theme.styles";
import Post from "../../interfaces/Post";
import { useAppDispatch } from "../../services/redux/hooks";
import { setSelectedPost } from "../../services/redux/reducers/app/app";
import { dismissPost } from "../../services/redux/reducers/subreddit/subreddit";
import {
	AnimatedCardWrapper,
	Arrow,
	Card,
	CardBody,
	CardFooter,
	CardImage,
	DismissButton,
	Meta,
	PostDetails,
	Title,
	UnreadMarker,
	User
} from "./PostPreview.styles";

interface PostProps {
	post: Post;
	read: boolean;
	selected: boolean;
}

const PostPreview: React.FC<PostProps> = ({ post, read, selected }) => {
	const dispatch = useAppDispatch();

	const cardVariants = {
		initial: (selected: boolean) => ({
			borderColor: selected ? `${theme.colors.blue}` : `${theme.colors.white}`
		}),
		animate: (selected: boolean) => ({
			borderColor: selected ? `${theme.colors.blue}` : `${theme.colors.white}`
		}),
		hover: (selected: boolean) => ({
			borderColor: selected ? `${theme.colors.blue}` : `${theme.colors.light200}`
		})
	};

	const markerVariants = {
		initial: {
			scale: 0,
			opacity: 0
		},
		animate: (read: boolean) => ({
			scale: read ? 0 : 1,
			opacity: read ? 0 : 1
		})
	};

	const titleVariants = {
		initial: (read: boolean) => ({
			fontWeight: read ? `400` : `700`
		}),
		animate: (read: boolean) => ({
			fontWeight: read ? `400` : `700`
		})
	};

	const onSelect = () => {
		dispatch(setSelectedPost({ post }));
	};

	const onDismiss = () => {
		dispatch(dismissPost({ postId: post.id }));
	};
	return (
		<AnimatedCardWrapper initial={{ opacity: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
			<Card
				onClick={onSelect}
				className={selected ? "active" : ""}
				initial="initial"
				animate="animate"
				whileHover="hover"
				variants={cardVariants}
				custom={selected}>
				<CardBody>
					<PostDetails>
						<UnreadMarker initial="initial" animate="animate" variants={markerVariants} custom={read} />
						<Title className={read ? "" : "unread"} initial="initial" animate="animate" variants={titleVariants} custom={read}>
							{post.title}
						</Title>
						<User>/u/{post.author}</User>
						<Arrow>
							<FontAwesomeIcon icon={faChevronRight} />
						</Arrow>
					</PostDetails>
					{post.thumbnail !== "self" && post.thumbnail && (
						<CardImage>
							<Image src={post.thumbnail} alt={post.title} layout="fill" />
						</CardImage>
					)}
				</CardBody>
				<CardFooter>
					<Meta>
						<div>
							<Moment date={post.created} unix fromNow />
						</div>
						<div>{post.num_comments} Comments</div>
					</Meta>
					<DismissButton onClick={onDismiss}>
						<FontAwesomeIcon icon={faArchive} />
						<span>Dismiss</span>
					</DismissButton>
				</CardFooter>
			</Card>
		</AnimatedCardWrapper>
	);
};
export default PostPreview;
