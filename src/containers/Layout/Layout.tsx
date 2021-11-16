import { ReactNode } from "react";
import PostList from "../../components/PostList/PostList";
import { GlobalStyles, Container, Sidebar } from "./Layout.styles";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<Sidebar>
					<PostList />
				</Sidebar>
				<div>{children}</div>
			</Container>
		</>
	);
};

export default Layout;
