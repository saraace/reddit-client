import Image from "next/image";
import Moment from "react-moment";
import Post from "../../interfaces/Post";
import { useAppDispatch } from "../../services/redux/hooks";
import { readPost, setSelectedPost } from "../../services/redux/reducers/app/app";
import { dismissPost } from "../../services/redux/reducers/subreddit/subreddit";

interface PostProps {
	post: Post;
	read: boolean;
}

const PostPreview: React.FC<PostProps> = ({ post, read }) => {
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
		<div style={{ border: "1px solid red", width: 600, margin: "20px 0" }}>
			<div style={{ display: "flex" }}>
				{post.thumbnail !== "self" && (
					<div style={{ flex: "0 0 150px" }}>
						<Image src={post.thumbnail} alt={post.title} width={post.thumbnail_width} height={post.thumbnail_height} />
					</div>
				)}
				<div>
					<div style={{ fontWeight: read ? 400 : 700 }}>{post.title}</div>
					<div>/u/{post.author}</div>
					<div>
						<Moment date={post.created} unix fromNow />
					</div>
					<div>{post.num_comments} Comments</div>
				</div>
			</div>
			<button onClick={onRead} disabled={read}>
				Read
			</button>
			&nbsp;&nbsp;
			<button onClick={onSelect}>Select</button>&nbsp;&nbsp;
			<button onClick={onDismiss}>Dismiss</button>
		</div>
	);
};
export default PostPreview;
