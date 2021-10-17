import type { NextPage } from "next";
import { TweetCard } from "src/components/card/TweetCard";
import { TweetForm } from "src/components/form/TweetForm";
import { FixedHeader } from "src/components/layout/FixedHeader";
import { MainBody } from "src/components/layout/MainBody";
import { NextLink } from "src/components/shared";
import { useGetAllUserTweetsQuery } from "src/graphql/gql";
import { styled } from "src/utils";

const HomePage: NextPage = () => {
	const { data, loading, error } = useGetAllUserTweetsQuery({
		variables: { userId: "miyahara" },
	});

	if (loading) {
		<div>ローティング中</div>;
	}
	if (error) {
		<div>エラーが発生</div>;
	}

	return (
		<MainBody>
			<FixedHeader title="ホーム" />

			<TweetDetailCardWrap>
				{/* todo */}
				<TweetForm type="tweet" userId={"miyahara"} isEdit />
			</TweetDetailCardWrap>

			{data
				? data.tweets.map((tweet) => (
						<NextLink key={tweet.id} href={`/${tweet.userId}/tweet/${tweet.id}`}>
							<TweetCard {...tweet} />
						</NextLink>
				  ))
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
