import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "./reducers/subreddit";
import appReducer from "./reducers/app";

export const store = configureStore({
	reducer: {
		app: appReducer,
		subreddit: subredditReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
