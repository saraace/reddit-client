import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "./reducers/subreddit";

export const store = configureStore({
	reducer: {
		subreddit: subredditReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
