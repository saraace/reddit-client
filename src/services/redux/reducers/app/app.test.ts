import appReducer, { AppState, readPost, setSelectedPost } from "./app";

describe("setSelectedPost()", () => {
	it("should create a selected post action", () => {
		expect(setSelectedPost({ post: { id: "1", title: "a title", author: "someone" } })).toEqual({
			payload: { post: { id: "1", title: "a title", author: "someone" } },
			type: "app/setSelectedPost"
		});
	});
});

describe("readPost()", () => {
	it("should create a read post action", () => {
		expect(readPost({ postId: "1" })).toEqual({
			payload: { postId: "1" },
			type: "app/readPost"
		});
	});
});

describe("The app reducer", () => {
	const initialState: AppState = {
		selectedPost: null,
		readPostIds: []
	};

	it("should set selected post", () => {
		const state = appReducer(initialState, {
			payload: { post: { id: "1", title: "a title", author: "someone" } },
			type: "app/setSelectedPost"
		});
		expect(state).toEqual({
			readPostIds: ["1"],
			selectedPost: { id: "1", title: "a title", author: "someone" }
		});
	});

	it("should add a post id to the empty readPostIts array", () => {
		const state = appReducer(initialState, {
			payload: { postId: "1" },
			type: "app/readPost"
		});
		expect(state).toEqual({
			readPostIds: ["1"],
			selectedPost: null
		});
	});

	const initialState2: AppState = {
		selectedPost: null,
		readPostIds: ["1"]
	};

	it("should append a post id to the readPostIts array", () => {
		const state = appReducer(initialState2, {
			payload: { postId: "2" },
			type: "app/readPost"
		});
		expect(state).toEqual({
			readPostIds: ["1", "2"],
			selectedPost: null
		});
	});
});
