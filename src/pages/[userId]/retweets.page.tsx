// eslint-disable-next-line import/no-default-export
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MainBody } from "src/components/layout/MainBody";
import { TopContentTitle } from "src/components/layout/TopContentTitle";
import { ProfileDetailCard } from "src/components/ProfileDetailCard";

const UserRetweetsPage: NextPage = () => {
	const router = useRouter();

	return (
		<MainBody>
			<TopContentTitle title={router.query.userId} subtitle="2,987件のツイート" isBrowserBack />

			<ProfileDetailCard />
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default UserRetweetsPage;
