import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../services/redux/hooks";
import { dismissPosts, selectDismissedPostIds, selectReadPostIds, selectSelectedPost } from "../../services/redux/reducers/app/app";
import {
	loadMorePosts,
	selectSubredditLoading,
	selectSubredditLoadMore,
	selectSubredditName,
	selectSubredditPosts
} from "../../services/redux/reducers/subreddit/subreddit";
import PostPreview from "../PostPreview/PostPreview";
import SubredditInput from "../SubredditInput/SubredditInput";
import { DismissAll, DismissAllButton, Message } from "./PostList.styles";

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useAppSelector(selectSubredditPosts);
	const subredditName = useAppSelector(selectSubredditName);
	const loadingPosts = useAppSelector(selectSubredditLoading);
	const loadMore = useAppSelector(selectSubredditLoadMore);
	const readPostIds = useAppSelector(selectReadPostIds);
	const dismissedPostIds = useAppSelector(selectDismissedPostIds);
	const selectedPost = useAppSelector(selectSelectedPost);

	// reference to bottm of post list
	const { ref: loadMoreRef, inView } = useInView();

	useEffect(() => {
		if (inView && loadMore) {
			dispatch(loadMorePosts());
		}
	}, [inView, loadMore, dispatch]);

	const onDismissAll = () => {
		dispatch(dismissPosts({ postIds: posts.map((post) => post.id) }));
	};

	return (
		<div>
			<SubredditInput />
			{!loadingPosts && (
				<DismissAll>
					<DismissAllButton onClick={onDismissAll} disabled={posts.length <= 0}>
						Dismiss All
					</DismissAllButton>
				</DismissAll>
			)}
			{loadingPosts ? (
				<Message>
					<FontAwesomeIcon icon={faSpinner} spin />
					<span>Loading...</span>
				</Message>
			) : (
				<AnimatePresence>
					{posts.map(
						(post) =>
							!dismissedPostIds.includes(post.id) && (
								<PostPreview
									key={post.id}
									read={readPostIds.includes(post.id)}
									selected={selectedPost ? selectedPost.id === post.id : false}
									{...{ post }}
								/>
							)
					)}
				</AnimatePresence>
			)}
			{!loadingPosts && <div ref={loadMoreRef} />}
			{!loadMore && <Message>There are no more top posts to show within /r/{subredditName}</Message>}
		</div>
	);
};

export default PostList;
