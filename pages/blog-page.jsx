import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostData } from "../lib/posts";

export default function Blog({ posts }) {
	return (
		<Layout title="Blog" content="Blogページです">
			<ul className="m-10">
				{posts &&
					posts.map((post) => {
						return <Post key={post.id} post={post} />;
					})}
			</ul>
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = await getAllPostData();
	return {
		props: { posts },
	};
}
