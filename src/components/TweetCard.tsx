import Image from "next/image";
import type { VFC } from "react";
import { useMemo } from "react";
import { HoverUserCard } from "src/components/HoverUserCard";
import { IconGroup } from "src/components/IconGroup";
import { NextLink } from "src/components/shared";
import { Tooltip } from "src/components/Tooltip";
import { ICON_PHOTO_SIZE } from "src/constants/icon";
import { styled } from "src/utils";

export type TweetCardProps = {
	id: number;
	userId: string;
	tweetBody: string;
	user: {
		id: string;
		userName: string;
		profileBody: string;
		iconPhoto: string;
	};
	commentCount: { count: string };
	retweetCount: { count: string };
	likeCount: { count: string };
};

export const TweetCard: VFC<TweetCardProps> = (props) => {
	const href = useMemo(() => {
		return `/${props.userId}`;
	}, [props.userId]);

	return (
		<TweetWrap>
			<IconPhotoWrap>
				<HoverUserCard
					userId={props.user.id}
					userName={props.user.userName}
					profileBody={props.user.profileBody}
					iconPhoto="/myicon.jpg"
					followingCount="40"
					followerCount="130"
				>
					<NextLink href={href}>
						<Image
							src="/myicon.jpg"
							alt="Picture of the author"
							className="rounded-full"
							width={ICON_PHOTO_SIZE}
							height={ICON_PHOTO_SIZE}
						/>
					</NextLink>
				</HoverUserCard>

				<ConnectingBarWrap>
					<ConnectingBar></ConnectingBar>
				</ConnectingBarWrap>
			</IconPhotoWrap>

			<TweetInfoWrap>
				<UserInfoWrap>
					<HoverUserCard
						userId={props.user.id}
						userName={props.user.userName}
						profileBody={props.user.profileBody}
						iconPhoto="/myicon.jpg"
						followingCount="40"
						followerCount="130"
					>
						<NextLink href={href}>
							<UserName>{props.user.userName}</UserName>
							<UserId>{`@${props.user.id}`}</UserId>{" "}
						</NextLink>
					</HoverUserCard>
					<Dot>{"･"}</Dot>
					<Tooltip>
						<CreatedAt>10分</CreatedAt>
					</Tooltip>
				</UserInfoWrap>

				<TweetBody>{props.tweetBody}</TweetBody>

				<IconGroup
					retweetCount={props.retweetCount.count}
					likeCount={props.likeCount.count}
					commentCount={props.commentCount.count}
				/>
			</TweetInfoWrap>
		</TweetWrap>
	);
};

const TweetWrap = styled("div", {
	display: "flex",
	gap: "0.5rem",
	paddingX: "1rem",
	paddingTop: "0.75rem",
	width: "100%",
	borderBottom: "1px solid $slate6",
	"&:hover": { backgroundColor: "$slate3" },
});

const IconPhotoWrap = styled("div", {
	minWidth: "fit-content",
});

const ConnectingBarWrap = styled("div", {
	position: "relative",
	display: "flex",
	justifyContent: "center",
});

const ConnectingBar = styled("div", {
	position: "absolute",
	top: 0,
	height: 45,
	borderLeft: "2px solid $slate9",
});

const TweetInfoWrap = styled("div", {
	display: "flex",
	flexDirection: "column",
	paddingLeft: "0.25rem",
	width: "100%",
});

const UserInfoWrap = styled("div", {
	display: "flex",
	color: "$slate10",
});

const UserName = styled("span", {
	paddingRight: "0.5rem",
	color: "$slate12",
	fontWeight: "bold",
	"&:hover": { textDecoration: "underline" },
});

const UserId = styled("span", {
	textDecoration: "none",
});

const Dot = styled("span", {
	paddingX: "0.25rem",
});

const CreatedAt = styled("span", {
	"&:hover": { textDecoration: "underline" },
});

const TweetBody = styled("div", {});
