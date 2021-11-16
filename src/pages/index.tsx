import type { NextPage } from "next";
import PostDetail from "../components/PostDetail/PostDetail";
import Layout from "../containers/Layout/Layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<PostDetail />
		</Layout>
	);
};

export default Home;
