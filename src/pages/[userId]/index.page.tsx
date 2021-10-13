import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ProfileDetailCard } from "src/components/card/ProfileDetailCard";
import { TweetCard } from "src/components/card/TweetCard";
import { FixedHeader } from "src/components/layout/FixedHeader";
import { MainBody } from "src/components/layout/MainBody";
import { NextLink } from "src/components/shared";
import { useGetUserTweetsQuery } from "src/graphql/gql";

const UserProfilePage: NextPage = () => {
	const router = useRouter();
	const { data, loading, error } = useGetUserTweetsQuery({
		variables: { userId: String(router.query.userId) },
	});

	if (loading) {
		<div>ローティング中</div>;
	}
	if (error) {
		<div>エラーが発生</div>;
	}
	if (data === undefined) {
		return <div>データなし</div>;
	}

	return (
		<MainBody>
			<FixedHeader title={data.user.userName} subtitle={`${data.tweets.length}件のツイート`} isBrowserBack />

			<ProfileDetailCard {...data.user} />

			{data.tweets.map((tweet) => (
				<NextLink key={tweet.id} href={`/${tweet.userId}/tweet/${tweet.id}`}>
					<TweetCard {...tweet} />
				</NextLink>
			))}
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default UserProfilePage;
