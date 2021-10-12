import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MainBody } from "src/components/layout/MainBody";
import { TopContentTitle } from "src/components/layout/TopContentTitle";
import { ProfileDetailCard } from "src/components/ProfileDetailCard";
import { NextLink } from "src/components/shared";
import { TweetCard } from "src/components/TweetCard";
import { useGetUserTweetsQuery } from "src/graphql/gql";

const UserProfilePage: NextPage = () => {
	const router = useRouter();
	const { data, loading, error } = useGetUserTweetsQuery({
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
			<TopContentTitle title={router.query.userId} subtitle="2,987件のツイート" isBrowserBack />

			<ProfileDetailCard />

			{data
				? data.tweets.map((tweet) => {
						const href = `/miyahara/tweet/${tweet.id}`;
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
export default UserProfilePage;
