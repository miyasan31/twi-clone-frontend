import type { NextPage } from "next";
import { useRouter } from "next/router";
import { TweetDetailCard } from "src/components/card/TweetDetailCard";
import { FixedHeader } from "src/components/layout/FixedHeader";
import { MainBody } from "src/components/layout/MainBody";
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
			<FixedHeader title="ツイート" isBrowserBack />

			<TweetDetailCardWrap>{data ? <TweetDetailCard {...data.tweet} /> : null}</TweetDetailCardWrap>
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default TweetDetailPage;

const TweetDetailCardWrap = styled("div", {
	paddingTop: "3.25rem",
});
