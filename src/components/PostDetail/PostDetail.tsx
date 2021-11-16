import Post from "../../interfaces/Post";

interface PostDetailProps {
	post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
	return (
		<div>
			<div>
				<strong>Title:</strong> {post.title}
			</div>
		</div>
	);
};

export default PostDetail;
