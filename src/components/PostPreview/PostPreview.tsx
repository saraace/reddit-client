import Image from "next/image";
import Moment from "react-moment";
import Post from "../../interfaces/Post";
import { useAppDispatch, useAppSelector } from "../../services/redux/hooks";
import { readPost, selectSelectedPost, setSelectedPost } from "../../services/redux/reducers/app/app";
import { dismissPost } from "../../services/redux/reducers/subreddit/subreddit";
import { Card, CardBody, Meta, PostDetails, Title, UnreadMarker, User } from "./PostPreview.styles";

interface PostProps {
	post: Post;
	read: boolean;
}

const PostPreview: React.FC<PostProps> = ({ post, read }) => {
	const dispatch = useAppDispatch();
	const selectedPost = useAppSelector(selectSelectedPost);
	const onRead = () => {
		dispatch(readPost({ postId: post.id }));
	};
	const onSelect = () => {
		dispatch(setSelectedPost({ post }));
	};
	const onDismiss = () => {
		dispatch(dismissPost({ postId: post.id }));
	};
	return (
		<Card onClick={onSelect} className={selectedPost && selectedPost.id === post.id ? "active" : ""}>
			{/* {post.thumbnail !== "self" && (
				<CardImage>
					<Image src={post.thumbnail} alt={post.title} width={post.thumbnail_width} height={post.thumbnail_height} />
				</CardImage>
			)} */}
			<CardBody>
				<PostDetails>
					{!read && <UnreadMarker />}
					<Title className={read ? "" : "unread"}>{post.title}</Title>
					<User>/u/{post.author}</User>
					<Meta>
						<div>
							<Moment date={post.created} unix fromNow />
						</div>
						<div>{post.num_comments} Comments</div>
					</Meta>
				</PostDetails>
			</CardBody>
			{/* <button onClick={onRead} disabled={read}>
				Read
			</button>
			&nbsp;&nbsp;
			<button onClick={onDismiss}>Dismiss</button> */}
		</Card>
	);
};
export default PostPreview;
