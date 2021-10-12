import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { MainBody } from "src/components/layout/MainBody";
import { TopContentTitle } from "src/components/layout/TopContentTitle";
import { Flex, NextLink } from "src/components/shared";
import { Button } from "src/components/shared/Button";
import { TWEET_DATA } from "src/constants/tweet";
import { styled } from "src/utils";

const handleClick = () => {
	console.info("aaaa");
};

const UserProfilePage: NextPage = () => {
	const router = useRouter();

	return (
		<MainBody>
			<TopContentTitle title={router.query.userId} subtitle="2,987件のツイート" isBrowserBack />

			<ProfileWrap>
				<Image src="/1500x500.jpeg" alt="Picture of the author" layout="responsive" width={1500} height={500} />

				<ProfileBodyWrap>
					<IconWrap>
						<NextImage src="/oden.jpg" alt="Picture of the author" layout="fill" />
					</IconWrap>

					<EditButtonWrap>
						<Button color="slate" isOutline onClick={handleClick}>
							プロフィールを編集
						</Button>
					</EditButtonWrap>

					<UserName>{TWEET_DATA.user.userName}</UserName>
					<UserId>
						{"@"}
						{TWEET_DATA.user.id}
					</UserId>

					<ProfileBody>{TWEET_DATA.user.profileBody}</ProfileBody>

					<Flex gap={1}>
						<TextWrap>
							<NextLink href={"/"}>
								<FollowCount>
									<CountText>{10}</CountText>
									&nbsp;フォロー中
								</FollowCount>
							</NextLink>
						</TextWrap>

						<TextWrap>
							<NextLink href={"/"}>
								<FollowCount>
									<CountText>{100}</CountText>&nbsp;フォロワー
								</FollowCount>
							</NextLink>
						</TextWrap>
					</Flex>
				</ProfileBodyWrap>

				<Flex>
					<TabButton>
						<span>
							ツイート
							<TabActiveBar />
						</span>
					</TabButton>
					<TabButton>
						リツイートと返信
						<TabActiveBar />
					</TabButton>
					<TabButton>
						コメント
						<TabActiveBar />
					</TabButton>
					<TabButton>
						いいね
						<TabActiveBar />
					</TabButton>
				</Flex>
			</ProfileWrap>
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default UserProfilePage;

const NextImage = styled(Image, {
	objectFit: "cover",
});

const IconWrap = styled("div", {
	position: "absolute",
	top: "-2.5rem",
	left: "1rem",
	zIndex: 5,
	square: "100px",
	overflow: "hidden",
	borderRadius: 9999,
	border: "4px solid $slate2",

	"@xs": {
		top: "-3.25rem",
		square: "115px",
	},
	"@sm": {
		top: "-4.3rem",
		square: "130px",
	},
	"@md": {
		top: "-5rem",
		square: "140px",
	},
	"@lg": {
		square: "140px",
	},
	"@xl": {
		square: "140px",
	},
});

const ProfileWrap = styled("div", {
	paddingTop: "3.25rem",
	borderBottom: "1px solid $slate6",
});

const ProfileBodyWrap = styled("div", {
	position: "relative",
	padding: "1rem",
});

const EditButtonWrap = styled("div", {
	display: "flex",
	justifyContent: "end",
	paddingBottom: "0.75rem",
});

const UserName = styled("div", {
	color: "$slate12",
	fontSize: "1.25rem",
	fontWeight: 700,
	lineHeight: "1rem",
});
const UserId = styled("div", {
	color: "$slate10",
});

const ProfileBody = styled("div", {
	paddingY: "0.5rem",
});

const FollowCount = styled("span", {
	color: "$slate11",
	fontSize: "0.85rem",
});

const CountText = styled("span", {
	color: "$slate12",
	fontWeight: 700,
	fontSize: "1rem",
});

const TextWrap = styled("span", {
	"&:hover": { textDecoration: "underline" },
});

const TabActiveBar = styled("span", {
	position: "absolute",
	zIndex: 100,
	bottom: 0,
	left: 0,
	right: 0,
	marginX: "auto",
	height: "4px",
	borderRadius: 999,
	backgroundColor: "$primary9",
});

const TabButton = styled("div", {
	flexGrow: 1,
	paddingY: "1rem",
	color: "$slate10",
	textAlign: "center",
	position: "relative",
	cursor: "pointer",

	backgroundColor: "$slate2",
	"&:hover": {
		backgroundColor: "$slate5",
	},

	[`& ${TabActiveBar}`]: { width: "calc(100% - 80px)" },
});
