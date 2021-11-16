import { createSlice } from "@reduxjs/toolkit";
import Post from "../../../../interfaces/Post";
import { RootState } from "../../store";

export interface AppState {
	selectedPost: Post | null;
	readPostIds: string[];
}

const initialState: AppState = {
	selectedPost: null,
	readPostIds: []
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
		})
	}
});

export const { setSelectedPost, readPost } = appSlice.actions;

export const selectSelectedPost = (state: RootState) => state.app.selectedPost;
export const selectReadPostIds = (state: RootState) => state.app.readPostIds;

export default appSlice.reducer;
