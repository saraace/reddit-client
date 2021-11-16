import { useAppSelector } from "../../services/redux/hooks";
import { selectReadPostIds } from "../../services/redux/reducers/app";
import { selectSubredditLoading, selectSubredditPosts } from "../../services/redux/reducers/subreddit";
import Post from "./Post/Post";

const PostList = () => {
	const posts = useAppSelector(selectSubredditPosts);
	const loadingPosts = useAppSelector(selectSubredditLoading);
	const readPostIds = useAppSelector(selectReadPostIds);

	return (
		<div>
			{loadingPosts ? <div>Loading</div> : posts.map((post) => <Post key={post.id} read={readPostIds.includes(post.id)} {...{ post }} />)}
		</div>
	);
};

export default PostList;
