// eslint-disable-next-line import/no-default-export
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ProfileDetailCard } from "src/components/card/ProfileDetailCard";
import { FixedHeader } from "src/components/layout/FixedHeader";
import { MainBody } from "src/components/layout/MainBody";
import { useGetUserRetweetsQuery } from "src/graphql/gql";

const UserRetweetsPage: NextPage = () => {
	const router = useRouter();
	const { data, loading, error } = useGetUserRetweetsQuery({
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
			<FixedHeader title={data.user.userName} subtitle={`${data.retweets.length}件のリツイート`} isBrowserBack />

			<ProfileDetailCard {...data.user} />
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default UserRetweetsPage;
