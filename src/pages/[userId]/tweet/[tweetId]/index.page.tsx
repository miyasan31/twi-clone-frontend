import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MainBody } from "src/components/layout/MainBody";
import { TopContentTitle } from "src/components/layout/TopContentTitle";
import { TweetDetailCard } from "src/components/TweetDetailCard";
import { useGetTweetDetailQuery } from "src/graphql/gql";
import { styled } from "src/utils";

const TweetDetailPage: NextPage = () => {
	const router = useRouter();

	const { data, loading, error } = useGetTweetDetailQuery({
		variables: { tweetId: Number(router.query.tweetId) },
	});

	if (loading) {
		<div>ローティング中</div>;
	}

	if (error) {
		<div>エラーが発生</div>;
	}

	return (
		<MainBody>
			<TopContentTitle title="ツイート" isBrowserBack />

			<TweetDetailCardWrap>{data ? <TweetDetailCard {...data.tweet} /> : null}</TweetDetailCardWrap>
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default TweetDetailPage;

const TweetDetailCardWrap = styled("div", {
	paddingTop: "3.25rem",
});
