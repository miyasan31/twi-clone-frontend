import Image from "next/image";
import type { VFC } from "react";
import { Flex, NextLink } from "src/components/shared";
import { Button } from "src/components/shared/Button";
import { ProfileTab } from "src/components/tab/ProfileTab";
import { styled } from "src/utils";

const handleClick = () => {
	console.info("aaaa");
};

type Props = {
	id: string;
	userName: string;
	profileBody: string;
	iconPhoto: string;
	followerCount: {
		count: string;
	};
	followingCount: {
		count: string;
	};
};

export const ProfileDetailCard: VFC<Props> = (props) => {
	return (
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

				<UserName>{props.userName}</UserName>
				<UserId>
					{"@"}
					{props.id}
				</UserId>

				<ProfileBody>{props.profileBody}</ProfileBody>

				<Flex gap={1}>
					<TextWrap>
						<NextLink href={`/${props.id}/followings`}>
							<FollowCount>
								<CountText>{props.followingCount.count}</CountText>
								&nbsp;フォロー中
							</FollowCount>
						</NextLink>
					</TextWrap>

					<TextWrap>
						<NextLink href={`/${props.id}/followers`}>
							<FollowCount>
								<CountText>{props.followerCount.count}</CountText>&nbsp;フォロワー
							</FollowCount>
						</NextLink>
					</TextWrap>
				</Flex>
			</ProfileBodyWrap>

			<ProfileTab userId={props.id} />
		</ProfileWrap>
	);
};

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
