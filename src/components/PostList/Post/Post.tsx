import Post from "../../../interfaces/Post";
import { useAppDispatch } from "../../../services/redux/hooks";
import { readPost, setSelectedPost } from "../../../services/redux/reducers/app";
import { dismissPost } from "../../../services/redux/reducers/subreddit";

interface PostProps {
	post: Post;
	read: boolean;
}

const Post: React.FC<PostProps> = ({ post, read }) => {
	const dispatch = useAppDispatch();
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
		<div style={{ border: "1px solid red", width: 400, margin: "20px 0", fontWeight: read ? 400 : 700 }}>
			<div>{post.title}</div>
			<button onClick={onRead} disabled={read}>
				Read
			</button>
			&nbsp;&nbsp;
			<button onClick={onSelect}>Select</button>&nbsp;&nbsp;
			<button onClick={onDismiss}>Dismiss</button>
		</div>
	);
};
export default Post;
