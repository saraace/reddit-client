import { useAppSelector } from "../../services/redux/hooks";
import { selectSubredditLoading, selectSubredditPosts } from "../../services/redux/reducers/subreddit";

const PostList = () => {
	const posts = useAppSelector(selectSubredditPosts);
	const loadingPosts = useAppSelector(selectSubredditLoading);

	return <div>{loadingPosts ? <div>Loading</div> : posts.map((post) => <div key={post.id}>{post.title}</div>)}</div>;
};

export default PostList;
