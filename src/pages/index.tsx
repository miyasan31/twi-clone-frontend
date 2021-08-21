import { gql } from "@apollo/client";
import type { NextPage } from "next";
import { Layout } from "src/components/Layout";
import { usePostsQuery } from "src/graphql/gql";

const HomePage: NextPage = () => {
	const { loading, error, data } = usePostsQuery();
	console.info(data);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<Layout>
			<div className="flex h-screen">
				<div className="flex-1 bg-red-200"></div>
				<div className="flex-1 bg-green-200"></div>
				<div className="flex-1 bg-blue-200"></div>
			</div>
		</Layout>
	);
};

// eslint-disable-next-line import/no-default-export
export default HomePage;

gql`
	query Posts {
		allPosts {
			id
			title
			views
			userId
		}
	}
`;
