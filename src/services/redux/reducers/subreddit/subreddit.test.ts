import subredditReducer, { loadMorePosts, loadPosts, SubredditState } from "./subreddit";
import Listing from "../../../../interfaces/Listing";

describe("The subreddit reducer", () => {
	const initialState: SubredditState = {
		name: "",
		loading: true,
		loadMore: true,
		after: null,
		before: null,
		count: 1,
		posts: [
			{
				id: "12",
				title: "TEST2",
				author: "author2",
				selftext: "selftext2",
				created: "1232322",
				num_comments: 21,
				thumbnail: "test2.jpg",
				thumbnail_width: 102,
				thumbnail_height: 102,
				permalink: "/r/test2",
				preview: {
					enabled: true,
					images: [
						{
							source: {
								height: 20,
								url: "test2.jpg",
								width: 20
							}
						}
					]
				}
			}
		]
	};

	const listing: Listing = {
		after: "afterLink",
		before: "beforeLink",
		dist: 1,
		children: [
			{
				kind: "t1",
				data: {
					id: "1",
					title: "TEST",
					author: "author",
					selftext: "selftext",
					created: "123232",
					num_comments: 1,
					thumbnail: "test.jpg",
					thumbnail_width: 10,
					thumbnail_height: 10,
					permalink: "/r/test",
					preview: {
						enabled: true,
						images: [
							{
								source: {
									height: 20,
									url: "test2.jpg",
									width: 20
								}
							}
						]
					}
				}
			}
		]
	};

	it("should return no posts and loading state true", () => {
		const action = loadPosts.pending("", "subredditname");
		expect(subredditReducer(initialState, action)).toEqual({
			loading: true,
			loadMore: true,
			after: null,
			before: null,
			name: "",
			count: 0,
			posts: [
				{
					id: "12",
					title: "TEST2",
					author: "author2",
					selftext: "selftext2",
					created: "1232322",
					num_comments: 21,
					thumbnail: "test2.jpg",
					thumbnail_width: 102,
					thumbnail_height: 102,
					permalink: "/r/test2",
					preview: {
						enabled: true,
						images: [
							{
								source: {
									height: 20,
									url: "test2.jpg",
									width: 20
								}
							}
						]
					}
				}
			]
		});
	});

	it("should return loaded posts and loading state false", () => {
		const action = loadPosts.fulfilled(listing, "", "subredditname");
		expect(subredditReducer(initialState, action)).toEqual({
			after: "afterLink",
			before: "beforeLink",
			count: 1,
			loadMore: true,
			loading: false,
			name: "subredditname",
			posts: [
				{
					id: "1",
					title: "TEST",
					author: "author",
					selftext: "selftext",
					created: "123232",
					num_comments: 1,
					thumbnail: "test.jpg",
					thumbnail_width: 10,
					thumbnail_height: 10,
					permalink: "/r/test",
					preview: {
						enabled: true,
						images: [
							{
								source: {
									height: 20,
									url: "test2.jpg",
									width: 20
								}
							}
						]
					}
				}
			]
		});
	});

	it("should return no post and loading state false", () => {
		const action = loadPosts.rejected(null, "", "subredditname");
		expect(subredditReducer(initialState, action)).toEqual({
			loading: false,
			loadMore: false,
			after: null,
			before: null,
			posts: [],
			name: "subredditname",
			count: 0
		});
	});

	it("should append posts to existing state", () => {
		const action = loadMorePosts.fulfilled(listing, "");
		expect(subredditReducer(initialState, action)).toEqual({
			count: 2,
			after: "afterLink",
			before: "beforeLink",
			loadMore: true,
			loading: true,
			name: "",
			posts: [
				{
					id: "12",
					title: "TEST2",
					author: "author2",
					selftext: "selftext2",
					created: "1232322",
					num_comments: 21,
					thumbnail: "test2.jpg",
					thumbnail_width: 102,
					thumbnail_height: 102,
					permalink: "/r/test2",
					preview: {
						enabled: true,
						images: [
							{
								source: {
									height: 20,
									url: "test2.jpg",
									width: 20
								}
							}
						]
					}
				},
				{
					id: "1",
					title: "TEST",
					author: "author",
					selftext: "selftext",
					created: "123232",
					num_comments: 1,
					thumbnail: "test.jpg",
					thumbnail_width: 10,
					thumbnail_height: 10,
					permalink: "/r/test",
					preview: {
						enabled: true,
						images: [
							{
								source: {
									height: 20,
									url: "test2.jpg",
									width: 20
								}
							}
						]
					}
				}
			]
		});
	});
});
