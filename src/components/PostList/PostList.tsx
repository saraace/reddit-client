import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../services/redux/hooks";
import { selectReadPostIds, selectSelectedPost } from "../../services/redux/reducers/app/app";
import {
	dismissAllPosts,
	loadMorePosts,
	selectSubredditLoading,
	selectSubredditLoadMore,
	selectSubredditPosts
} from "../../services/redux/reducers/subreddit/subreddit";
import PostPreview from "../PostPreview/PostPreview";

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useAppSelector(selectSubredditPosts);
	const loadingPosts = useAppSelector(selectSubredditLoading);
	const loadMore = useAppSelector(selectSubredditLoadMore);
	const readPostIds = useAppSelector(selectReadPostIds);
	const selectedPost = useAppSelector(selectSelectedPost);

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
			{loadingPosts ? (
				<div>Loading</div>
			) : (
				<AnimatePresence>
					{posts.map((post) => (
						<PostPreview
							key={post.id}
							read={readPostIds.includes(post.id)}
							selected={selectedPost ? selectedPost.id === post.id : false}
							{...{ post }}
						/>
					))}
				</AnimatePresence>
			)}
			{!loadingPosts && (
				<button onClick={onLoadMore} disabled={!loadMore}>
					Load More
				</button>
			)}
		</div>
	);
};

export default PostList;
