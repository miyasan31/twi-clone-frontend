import type { GetServerSideProps } from "next";
import Link from "next/link";
import type { FC } from "react";
import { Layout } from "src/components/Layout";
import type { PostType } from "src/models/types";

const PostsPage: FC<{ data: PostType[] }> = (props) => {
	return (
		<Layout>
			<>
				{props.data.map((item) => {
					return (
						<div key={item.id} className="flex">
							<Link href={`/posts/${item.id}`}>
								<a className="p-5 hover:bg-gray-200">
									<button>{item.id}</button>
								</a>
							</Link>
							<div className="flex-1 bg-green-200">{item.title}</div>
							<div className="flex-1 bg-blue-200">{item.author}</div>
							<div className="flex-1 bg-red-200">{item.id}</div>
						</div>
					);
				})}
			</>
		</Layout>
	);
};

// ----- SSR -----
export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch("http://localhost:3001/posts");
	const data = await res.json();
	return { props: { data } };
};

// eslint-disable-next-line import/no-default-export
export default PostsPage;
