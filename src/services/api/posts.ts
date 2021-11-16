import axios from "axios";
import Listing from "../../interfaces/Listing";

const Posts = {
	fetchTop: (subreddit: string = "funny", count: number = 0, after: string = ""): Promise<Listing> =>
		axios.get(`https://www.reddit.com/r/${subreddit}/top.json?limit=${10}&count=${count}&after=${after}`).then((res) => res.data.data)
};

export default Posts;
