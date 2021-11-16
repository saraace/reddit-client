import { createSlice } from "@reduxjs/toolkit";
import Post from "../../../../interfaces/Post";
import { RootState } from "../../store";

export interface AppState {
	selectedPost: Post | null;
	readPostIds: string[];
	dismissedPostIds: string[];
}

const initialState: AppState = {
	selectedPost: null,
	readPostIds: [],
	dismissedPostIds: []
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setSelectedPost: (state, action) => ({
			...state,
			selectedPost: action.payload.post,
			readPostIds: [...state.readPostIds, action.payload.post.id]
		}),
		readPost: (state, action) => ({
			...state,
			readPostIds: [...state.readPostIds, action.payload.postId]
		}),
		dismissPost: (state, action) => ({
			...state,
			dismissedPostIds: [...state.dismissedPostIds, action.payload.postId]
		}),
		dismissPosts: (state, action) => ({
			...state,
			dismissedPostIds: [...state.dismissedPostIds, ...action.payload.postIds]
		})
	}
});

export const { setSelectedPost, readPost, dismissPost, dismissPosts } = appSlice.actions;

export const selectSelectedPost = (state: RootState) => state.app.selectedPost;
export const selectReadPostIds = (state: RootState) => state.app.readPostIds;
export const selectDismissedPostIds = (state: RootState) => state.app.dismissedPostIds;

export default appSlice.reducer;
