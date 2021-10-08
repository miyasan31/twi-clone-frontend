import type { NextPage } from "next";
import { MainBody } from "src/components/layout/MainBody";
import { NextLink } from "src/components/shared";
import { TweetCard } from "src/components/TweetCard";
import { useGetAllUserTweetsQuery } from "src/graphql/gql";

const HomePage: NextPage = () => {
	const { data } = useGetAllUserTweetsQuery();

	return (
		<MainBody>
			{data?.tweets.map((tweet) => {
				const href = `/${tweet.userId}/tweet/${tweet.id}`;
				return (
					<NextLink key={tweet.id} href={href}>
						<TweetCard {...tweet} />
					</NextLink>
				);
			})}
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
