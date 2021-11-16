import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../services/redux/hooks";
import { loadPosts, selectSubredditLoading, selectSubredditName } from "../../services/redux/reducers/subreddit/subreddit";
import { InputWrapper, Spinner, StyledInput } from "./SubredditInput.styles";

const SubredditInput = () => {
	const dispatch = useAppDispatch();
	const subreddit = useAppSelector(selectSubredditName);
	const loading = useAppSelector(selectSubredditLoading);
	const [inputSubreddit, setInputSubreddit] = useState("");

	useEffect(() => {
		setInputSubreddit(subreddit);
	}, [subreddit]);

	useEffect(() => {
		const fetchData = async () => {
			dispatch(loadPosts(inputSubreddit));
		};

		const timer = setTimeout(() => {
			if (inputSubreddit !== "" && inputSubreddit !== subreddit) {
				fetchData();
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [inputSubreddit, subreddit, dispatch]);

	return (
		<InputWrapper>
			<StyledInput
				type="text"
				placeholder="Search Reddit"
				value={inputSubreddit}
				onChange={(e) => setInputSubreddit(e.target.value)}
				disabled={loading}
			/>
			{loading && (
				<Spinner>
					<FontAwesomeIcon icon={faSpinner} spin />
				</Spinner>
			)}
		</InputWrapper>
	);
};

export default SubredditInput;
