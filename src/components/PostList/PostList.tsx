import { useDispatch } from "react-redux";
import { useAppSelector } from "../../services/redux/hooks";
import { selectReadPostIds } from "../../services/redux/reducers/app";
import {
	dismissAllPosts,
	loadMorePosts,
	selectSubredditLoading,
	selectSubredditLoadMore,
	selectSubredditPosts
} from "../../services/redux/reducers/subreddit";
import Post from "./Post/Post";

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useAppSelector(selectSubredditPosts);
	const loadingPosts = useAppSelector(selectSubredditLoading);
	const loadMore = useAppSelector(selectSubredditLoadMore);
	const readPostIds = useAppSelector(selectReadPostIds);

	const onDismissAll = () => {
		dispatch(dismissAllPosts({}));
	};

	const onLoadMore = () => {
		dispatch(loadMorePosts());
	};

	return (
		<div>
			{!loadingPosts && (
				<button onClick={onDismissAll} disabled={posts.length <= 0}>
					Dismiss All
				</button>
			)}
			{loadingPosts ? <div>Loading</div> : posts.map((post) => <Post key={post.id} read={readPostIds.includes(post.id)} {...{ post }} />)}
			{!loadingPosts && (
				<button onClick={onLoadMore} disabled={!loadMore}>
					Load More
				</button>
			)}
		</div>
	);
};

export default PostList;
