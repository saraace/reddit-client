import type { NextPage } from "next";
import { useEffect } from "react";
import { useAppDispatch } from "../services/redux/hooks";
import { loadPosts } from "../services/redux/reducers/subreddit";
import PostDetail from "../components/PostDetail/PostDetail";
import Layout from "../containers/Layout/Layout";

const Home: NextPage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadPosts("miami"));
	}, [dispatch]);

	return (
		<Layout>
			<PostDetail />
		</Layout>
	);
};

export default Home;
