import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Post from "../../../interfaces/Post";
import Posts from "../../api/posts";
import { RootState } from "../store";

export interface SubredditState {
	name: string;
	loading: boolean;
	posts: Post[];
}

const initialState: SubredditState = {
	name: "",
	loading: true,
	posts: []
};

export const loadPosts = createAsyncThunk<Post[], string>(`/top`, async (subreddit: string, thunkApi) => {
	const response = await Posts.fetchTop(subreddit);
	return response;
});

const subredditSlice = createSlice({
	name: "subreddit",
	initialState,
	reducers: {
		dismissPost: (state, action) => ({
			...state,
			posts: state.posts.filter((post) => post.id !== action.payload.postId)
		}),
		dismissAllPosts: (state, _) => ({
			...state,
			posts: []
		})
	},
	extraReducers: (builder) => {
		builder.addCase(loadPosts.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(loadPosts.fulfilled, (state, action) => {
			state.loading = false;
			state.name = action.meta.arg;
			state.posts = action.payload;
		});
	}
});

export const { dismissPost, dismissAllPosts } = subredditSlice.actions;

export const selectSubredditPosts = (state: RootState) => state.subreddit.posts;
export const selectSubredditLoading = (state: RootState) => state.subreddit.loading;

export default subredditSlice.reducer;
