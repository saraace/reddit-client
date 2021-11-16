import { PostPreview } from "./PostPreview";

export default interface Post {
	id: string;
	title: string;
	author: string;
	selftext: string;
	created: string;
	num_comments: number;
	thumbnail: string;
	thumbnail_width: number;
	thumbnail_height: number;
	permalink: string;
	preview: PostPreview;
}
