import { ReactNode } from "react";
import PostList from "../../components/PostList/PostList";
import { useAppSelector } from "../../services/redux/hooks";
import { selectSubredditName } from "../../services/redux/reducers/subreddit/subreddit";
import { GlobalStyles, Container, Sidebar, Content, SubredditTitle, SelectedPost } from "./Layout.styles";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const subreddit = useAppSelector(selectSubredditName);
	return (
		<>
			<GlobalStyles />
			<Container>
				<Sidebar>
					<PostList />
				</Sidebar>
				<Content>
					<SubredditTitle>
						<h1>/r/{subreddit}</h1>
					</SubredditTitle>
					<SelectedPost>{children}</SelectedPost>
				</Content>
			</Container>
		</>
	);
};

export default Layout;
