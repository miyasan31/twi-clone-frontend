import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ProfileCard } from "src/components/card/ProfileCard";
import { FixedHeader } from "src/components/layout/FixedHeader";
import { MainBody } from "src/components/layout/MainBody";
import { NextLink } from "src/components/shared";
import { FollowTab } from "src/components/tab/FollowTab";
import { useGetUserFollowingsQuery } from "src/graphql/gql";
import { styled } from "src/utils";

const UserFollowingsPage: NextPage = () => {
	const router = useRouter();
	const { data, loading, error } = useGetUserFollowingsQuery({
		variables: { userId: String(router.query.userId) },
	});

	if (loading) {
		<div>ローティング中</div>;
	}
	if (error) {
		<div>エラーが発生</div>;
	}
	// if (data === undefined) {
	// 	return <div>データなし</div>;
	// }

	return (
		<MainBody>
			<FixedHeader title={data?.user.userName} subtitle={`@${data?.user.id}`} isBrowserBack>
				<FollowTab userId={data?.user.id} />
			</FixedHeader>

			<UserCardWrap>
				{data
					? data?.followings.map((user) => (
							<NextLink key={user.id} href={`/${user.userId}`}>
								<ProfileCard {...user} />
							</NextLink>
					  ))
					: null}
			</UserCardWrap>
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default UserFollowingsPage;

const UserCardWrap = styled("div", {
	paddingTop: "7rem",
});
