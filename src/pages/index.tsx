import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../services/redux/hooks";
import { loadPosts, selectSubredditName, selectSubredditPosts } from "../services/redux/reducers/subreddit/subreddit";
import PostDetail from "../components/PostDetail/PostDetail";
import Layout from "../containers/Layout/Layout";
import { selectSelectedPost } from "../services/redux/reducers/app/app";

const Home: NextPage = () => {
	const dispatch = useAppDispatch();
	const selectedPost = useAppSelector(selectSelectedPost);
	const subredditName = useAppSelector(selectSubredditName);
	const posts = useAppSelector(selectSubredditPosts);

	useEffect(() => {
		if (subredditName === "" && posts.length <= 0) {
			dispatch(loadPosts("Damnthatsinteresting"));
		}
	}, [dispatch, posts, subredditName]);

	return (
		<>
			<Head>
				<title>Reddit Client</title>
			</Head>
			<Layout>{selectedPost && posts.map((post) => post.id).includes(selectedPost.id) && <PostDetail post={selectedPost} />}</Layout>
		</>
	);
};

export default Home;
