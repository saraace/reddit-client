import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "./reducers/subreddit";
import appReducer from "./reducers/app";
import { loadState, saveState } from "../localstorage";

const persistentState = loadState();

export const store = configureStore({
	reducer: {
		app: appReducer,
		subreddit: subredditReducer
	},
	preloadedState: persistentState
});

store.subscribe(() => {
	const state = store.getState();
	saveState(state);
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
