import type { GetServerSideProps, NextPage } from "next";
// import { useRouter } from "next/router";
import { TweetDetailCard } from "src/components/card/TweetDetailCard";
import { FixedHeader } from "src/components/layout/FixedHeader";
import { MainBody } from "src/components/layout/MainBody";
import { client } from "src/graphql/apollo-client";
import type { GetTweetDetailQuery, GetTweetDetailQueryVariables } from "src/graphql/gql";
import { GetTweetDetailDocument } from "src/graphql/gql";
import { styled } from "src/utils";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const dynamicParams = context.params;
	const { data } = await client.query<GetTweetDetailQuery, GetTweetDetailQueryVariables>({
		query: GetTweetDetailDocument,
		variables: { tweetId: Number(dynamicParams?.tweetId), userId: "miyahara" },
	});

	if (!data) return { notFound: true };
	return { props: { data } };
};

const TweetDetailPage: NextPage<{ data: any }> = (props) => {
	// const router = useRouter();

	// const { data, loading, error } = useGetTweetDetailQuery({
	// 	variables: { tweetId: Number(router.query.tweetId), userId: "miyahara" },
	// });

	// if (loading) {
	// 	<div>ローティング中</div>;
	// }

	// if (error) {
	// 	<div>エラーが発生</div>;
	// }

	return (
		<MainBody>
			<FixedHeader title="ツイート" isBrowserBack />

			<TweetDetailCardWrap>{props.data ? <TweetDetailCard {...props.data.tweet} /> : null}</TweetDetailCardWrap>
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default TweetDetailPage;

const TweetDetailCardWrap = styled("div", {
	paddingTop: "3.25rem",
});
