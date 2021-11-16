import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Listing from "../../../../interfaces/Listing";
import Post from "../../../../interfaces/Post";
import Posts from "../../../api/posts";
import { RootState } from "../../store";

export interface SubredditState {
	name: string;
	loading: boolean;
	loadMore: boolean;
	after: string | null;
	before: string | null;
	count: number;
	posts: Post[];
}

const initialState: SubredditState = {
	name: "",
	loading: true,
	loadMore: true,
	after: null,
	before: null,
	count: 0,
	posts: []
};

export const loadPosts = createAsyncThunk<Listing, string>(`/top`, async (subreddit: string, thunkApi) => {
	const state = thunkApi.getState() as RootState;
	const response = await Posts.fetchTop(subreddit, state.subreddit.count);
	return response;
});

export const loadMorePosts = createAsyncThunk<Listing, void>(`/top/next`, async (_, thunkApi) => {
	const state = thunkApi.getState() as RootState;
	const response = await Posts.fetchTop(state.subreddit.name, state.subreddit.count, state.subreddit.after ? state.subreddit.after : "");
	return response;
});

const subredditSlice = createSlice({
	name: "subreddit",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadPosts.pending, (state) => {
			state.loading = true;
			state.after = null;
			state.before = null;
			state.count = 0;
		});
		builder.addCase(loadPosts.fulfilled, (state, action) => {
			state.loading = false;
			state.name = action.meta.arg;
			state.count = state.count + action.payload.dist;
			state.after = action.payload.after;
			state.before = action.payload.before;
			state.loadMore = state.after ? true : false;
			state.posts = action.payload.children.map((post) => post.data);
		});
		builder.addCase(loadMorePosts.fulfilled, (state, action) => {
			state.count = state.count + action.payload.dist;
			state.after = action.payload.after;
			state.before = action.payload.before;
			state.loadMore = state.after ? true : false;
			state.posts = [...state.posts, ...action.payload.children.map((post) => post.data)];
		});
	}
});

export const selectSubredditName = (state: RootState) => state.subreddit.name;
export const selectSubredditPosts = (state: RootState) => state.subreddit.posts;
export const selectSubredditLoading = (state: RootState) => state.subreddit.loading;
export const selectSubredditLoadMore = (state: RootState) => state.subreddit.loadMore;

export default subredditSlice.reducer;
