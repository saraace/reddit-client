import appReducer, { AppState, dismissPost, dismissPosts, readPost, setSelectedPost } from "./app";

describe("setSelectedPost()", () => {
	it("should create a selected post action", () => {
		expect(setSelectedPost({ post: { id: "1", title: "a title", author: "someone" } })).toEqual({
			type: "app/setSelectedPost",
			payload: { post: { id: "1", title: "a title", author: "someone" } }
		});
	});
});

describe("readPost()", () => {
	it("should create a read post action", () => {
		expect(readPost({ postId: "1" })).toEqual({
			type: "app/readPost",
			payload: { postId: "1" }
		});
	});
});

describe("dismissPost()", () => {
	it("should create a dismiss post action", () => {
		expect(dismissPost({ postId: "1" })).toEqual({
			type: "app/dismissPost",
			payload: { postId: "1" }
		});
	});
});

describe("dismissPost()", () => {
	it("should create a dismiss posts action", () => {
		expect(dismissPosts({ postIds: ["1"] })).toEqual({
			type: "app/dismissPosts",
			payload: { postIds: ["1"] }
		});
	});
});

describe("The app reducer", () => {
	const initialState: AppState = {
		selectedPost: null,
		readPostIds: ["2"],
		dismissedPostIds: []
	};

	it("should set selected post", () => {
		const state = appReducer(initialState, {
			type: "app/setSelectedPost",
			payload: { post: { id: "1", title: "a title", author: "someone" } }
		});
		expect(state).toEqual({
			readPostIds: ["2", "1"],
			dismissedPostIds: [],
			selectedPost: { id: "1", title: "a title", author: "someone" }
		});
	});

	it("should append a post id to the readPostIts array", () => {
		const state = appReducer(initialState, {
			type: "app/readPost",
			payload: { postId: "1" }
		});
		expect(state).toEqual({
			readPostIds: ["2", "1"],
			dismissedPostIds: [],
			selectedPost: null
		});
	});

	it("should append a post id to the dismissedPostIds array", () => {
		const state = appReducer(initialState, {
			payload: { postId: "1" },
			type: "app/dismissPost"
		});
		expect(state).toEqual({
			readPostIds: ["2"],
			dismissedPostIds: ["1"],
			selectedPost: null
		});
	});

	it("should append post ids to the dismissedPostIds array", () => {
		const state = appReducer(initialState, {
			payload: { postIds: ["1", "3"] },
			type: "app/dismissPosts"
		});
		expect(state).toEqual({
			readPostIds: ["2"],
			dismissedPostIds: ["1", "3"],
			selectedPost: null
		});
	});
});
