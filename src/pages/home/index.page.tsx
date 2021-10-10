import type { NextPage } from "next";
import { MainBody } from "src/components/layout/MainBody";
import { TopContentTitle } from "src/components/layout/TopContentTitle";
import { NextLink } from "src/components/shared";
import { TweetCard } from "src/components/TweetCard";
import { TweetForm } from "src/components/TweetForm";
import { useGetAllUserTweetsQuery } from "src/graphql/gql";
import { styled } from "src/utils";

const HomePage: NextPage = () => {
	const { data, loading, error } = useGetAllUserTweetsQuery();

	if (loading) {
		<div>ローティング中</div>;
	}
	if (error) {
		<div>エラーが発生</div>;
	}

	return (
		<MainBody>
			<TopContentTitle title="ホーム" />

			<TweetDetailCardWrap>
				<TweetForm type="tweet" userId={"miyahara"} isEdit />
			</TweetDetailCardWrap>

			{data
				? data.tweets.map((tweet) => {
						const href = `/${tweet.userId}/tweet/${tweet.id}`;
						return (
							<NextLink key={tweet.id} href={href}>
								<TweetCard {...tweet} />
							</NextLink>
						);
				  })
				: null}
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default HomePage;

const TweetDetailCardWrap = styled("div", {
	marginTop: "3.25rem",
	paddingX: "1rem",

	borderBottom: "1px solid $slate6",
});
