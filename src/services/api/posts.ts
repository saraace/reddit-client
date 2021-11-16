import axios from "axios";
import Post from "../../interfaces/Post";

const Posts = {
	fetchTop: (subreddit: string = "funny"): Promise<Post[]> =>
		axios
			.get(`https://www.reddit.com/r/${subreddit}/top.json?`)
			.then((res) => (res ? res.data.data.children.map((listing: { data: Post; type: string }) => listing.data) : []))
};

export default Posts;
