import type { GetServerSideProps, NextPage } from "next";
// import { useRouter } from "next/router";
import { ProfileDetailCard } from "src/components/card/ProfileDetailCard";
import { FixedHeader } from "src/components/layout/FixedHeader";
import { MainBody } from "src/components/layout/MainBody";
import { client } from "src/graphql/apollo-client";
import type { GetUserLikesQuery, GetUserLikesQueryVariables } from "src/graphql/gql";
import { GetUserLikesDocument } from "src/graphql/gql";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const dynamicParams = context.params;
	const { data } = await client.query<GetUserLikesQuery, GetUserLikesQueryVariables>({
		query: GetUserLikesDocument,
		variables: { userId: String(dynamicParams?.userId) },
	});

	if (!data) return { notFound: true };
	return { props: { data } };
};

const UserLikesPage: NextPage<{ data: any }> = (props) => {
	// const router = useRouter();
	// const { data, loading, error } = useGetUserLikesQuery({
	// 	variables: { userId: String(router.query.userId) },
	// });

	// if (loading) {
	// 	<div>ローティング中</div>;
	// }
	// if (error) {
	// 	<div>エラーが発生</div>;
	// }
	// if (data === undefined) {
	// 	return <div>データなし</div>;
	// }

	return (
		<MainBody>
			<FixedHeader title={props.data.user.userName} subtitle={`${props.data.likes.length}件のいいね`} isBrowserBack />

			<ProfileDetailCard {...props.data.user} />
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default UserLikesPage;
