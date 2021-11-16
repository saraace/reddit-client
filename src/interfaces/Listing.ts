import Post from "./Post";

export default interface Listing {
	after: string | null;
	before: string | null;
	children: { data: Post; kind: string }[];
	dist: number;
}
