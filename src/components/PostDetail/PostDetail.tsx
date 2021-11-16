import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageLoaderProps } from "next/image";
import { useEffect, useState } from "react";
import Post from "../../interfaces/Post";
import { decodeHtml } from "../../services/utils";
import { PostContainer } from "./PostDetail.styles";

interface PostDetailProps {
	post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
	const [imageHeight, setImageHeight] = useState(0);

	useEffect(() => {
		if (post) {
			if (post.thumbnail !== "self" && post.thumbnail) {
				// calculate image height
				setImageHeight(600 * (post.preview.images[0].source.height / post.preview.images[0].source.width));
			}
		}
	}, [post]);

	const imageLoader = (image: ImageLoaderProps) => {
		return image.src;
	};

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				key={post.id}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 50 }}
				transition={{ bounce: 0 }}>
				<PostContainer>
					<h2>{decodeHtml(post.title)}</h2>
					{post.thumbnail !== "self" && post.thumbnail && (
						<div>
							<Image
								loader={imageLoader}
								src={decodeHtml(post.preview.images[0].source.url)}
								alt={post.title}
								width={600}
								height={imageHeight}
								unoptimized
							/>
						</div>
					)}
					<div>{decodeHtml(post.selftext)}</div>
				</PostContainer>
			</motion.div>
		</AnimatePresence>
	);
};

export default PostDetail;
