import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ProfileDetailCard } from "src/components/card/ProfileDetailCard";
import { FixedHeader } from "src/components/layout/FixedHeader";
import { MainBody } from "src/components/layout/MainBody";
import { useGetUserLikesQuery } from "src/graphql/gql";

const UserLikesPage: NextPage = () => {
	const router = useRouter();
	const { data, loading, error } = useGetUserLikesQuery({
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
			<FixedHeader title={data.user.userName} subtitle={`${data.likes.length}件のいいね`} isBrowserBack />

			<ProfileDetailCard {...data.user} />
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default UserLikesPage;
