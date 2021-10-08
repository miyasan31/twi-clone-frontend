import type { NextPage } from "next";
import { MainBody } from "src/components/layout/MainBody";
import { TweetCard } from "src/components/shared/TweetCard";
import { useGetAllUserTweetsQuery } from "src/graphql/gql";

const HomePage: NextPage = () => {
	const { data } = useGetAllUserTweetsQuery();

	return (
		<MainBody>
			{data?.tweets.map((tweet) => {
				return <TweetCard key={tweet.id} {...tweet} />;
			})}
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
