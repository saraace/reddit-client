import { ReactNode } from "react";
import PostList from "../../components/PostList/PostList";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<div>
				<PostList />
			</div>
			<div>{children}</div>
		</div>
	);
};

export default Layout;
