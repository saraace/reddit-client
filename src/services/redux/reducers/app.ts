import { createSlice } from "@reduxjs/toolkit";
import Post from "../../../interfaces/Post";
import { RootState } from "../store";

export interface AppState {
	selectedPost: Post | null;
}

const initialState: AppState = {
	selectedPost: null
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setSelectedPost: (state, action) => ({ ...state, post: action.payload.post })
	}
});

export const { setSelectedPost } = appSlice.actions;

export const selectSelectedPost = (state: RootState) => state.app.selectedPost;

export default appSlice.reducer;
