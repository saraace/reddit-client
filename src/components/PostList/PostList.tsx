import { useDispatch } from "react-redux";
import { useAppSelector } from "../../services/redux/hooks";
import { selectReadPostIds } from "../../services/redux/reducers/app";
import { dismissAllPosts, selectSubredditLoading, selectSubredditPosts } from "../../services/redux/reducers/subreddit";
import Post from "./Post/Post";

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useAppSelector(selectSubredditPosts);
	const loadingPosts = useAppSelector(selectSubredditLoading);
	const readPostIds = useAppSelector(selectReadPostIds);

	const onDismissAll = () => {
		dispatch(dismissAllPosts({}));
	};

	return (
		<div>
			{!loadingPosts && posts.length > 0 && <button onClick={onDismissAll}>Dismiss All</button>}
			{loadingPosts ? <div>Loading</div> : posts.map((post) => <Post key={post.id} read={readPostIds.includes(post.id)} {...{ post }} />)}
		</div>
	);
};

export default PostList;
