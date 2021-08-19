import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/Layout";
import type { PostType } from "src/models/types";

const PostPage: NextPage<{ data: PostType }> = (props) => {
	return (
		<Layout>
			<div className="flex h-screen">
				<div className="flex-1 bg-blue-200">{props.data.author}</div>
				<div className="flex-1 bg-red-200">{props.data.id}</div>
				<div className="flex-1 bg-green-200">{props.data.title}</div>
			</div>
		</Layout>
	);
};

// ----- SSG -----
export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch("http://localhost:3001/posts");
	const data = await res.json();
	const paths = data.map((item: any) => {
		return { params: { id: item.id.toString() } };
	});
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const query = params.id;
	const res = await fetch(`http://localhost:3001/posts/${query}`);
	const data = await res.json();
	return { props: { data }, revalidate: 60 };
};

// eslint-disable-next-line import/no-default-export
export default PostPage;
