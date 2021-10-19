import type { GetServerSideProps, NextPage } from "next";
// import { useRouter } from "next/router";
import { ProfileDetailCard } from "src/components/card/ProfileDetailCard";
import { TweetCard } from "src/components/card/TweetCard";
import { FixedHeader } from "src/components/layout/FixedHeader";
import { MainBody } from "src/components/layout/MainBody";
import { NextLink } from "src/components/shared";
import { client } from "src/graphql/apollo-client";
import type { GetUserTweetsQuery, GetUserTweetsQueryVariables } from "src/graphql/gql";
import { GetUserTweetsDocument } from "src/graphql/gql";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const dynamicParams = context.params;
	const { data } = await client.query<GetUserTweetsQuery, GetUserTweetsQueryVariables>({
		query: GetUserTweetsDocument,
		variables: { userId: String(dynamicParams?.userId) },
	});

	if (!data) return { notFound: true };
	return { props: { data } };
};

const UserProfilePage: NextPage<{ data: any }> = (props) => {
	// const router = useRouter();
	// const { data, loading, error } = useGetUserTweetsQuery({
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
			<FixedHeader
				title={props.data.user.userName}
				subtitle={`${props.data.tweets.length}件のツイート`}
				isBrowserBack
			/>

			<ProfileDetailCard {...props.data.user} />

			{props.data.tweets.map((tweet: any) => (
				<NextLink key={tweet.id} href={`/${tweet.userId}/tweet/${tweet.id}`}>
					<TweetCard {...tweet} />
				</NextLink>
			))}
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default UserProfilePage;
