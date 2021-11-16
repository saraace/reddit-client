import type { NextPage } from "next";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../services/redux/hooks";
import { loadPosts } from "../services/redux/reducers/subreddit";
import PostDetail from "../components/PostDetail/PostDetail";
import Layout from "../containers/Layout/Layout";
import { selectSelectedPost } from "../services/redux/reducers/app";

const Home: NextPage = () => {
	const dispatch = useAppDispatch();
	const selectedPost = useAppSelector(selectSelectedPost);

	useEffect(() => {
		dispatch(loadPosts("miami"));
	}, [dispatch]);

	return <Layout>{selectedPost ? <PostDetail post={selectedPost} /> : "No Post selected"}</Layout>;
};

export default Home;
