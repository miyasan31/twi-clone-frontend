import Image from "next/image";
import type { MouseEvent, VFC } from "react";
import { useCallback } from "react";
import { TweetActionGroup } from "src/components/card/TweetActionGroup";
import { IconButton, NextLink } from "src/components/shared";
import { DotsHorizontalIcon } from "src/components/shared/Icon";
import { HoverUserCard } from "src/components/tooltip/HoverUserCard";
import { Tooltip } from "src/components/tooltip/Tooltip";
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
	const handleClickDisabled = useCallback((e: MouseEvent) => {
		e.preventDefault();
	}, []);

	return (
		<TweetWrap>
			<IconPhotoWrap>
				<HoverUserCard
					align="start"
					userId={props.user.id}
					userName={props.user.userName}
					profileBody={props.user.profileBody}
					iconPhoto="/oden.jpg"
					followingCount="40"
					followerCount="130"
				>
					<NextLink href={`/${props.userId}`}>
						<Image
							src="/oden.jpg"
							alt="Picture of the author"
							className="rounded-full"
							width={ICON_PHOTO_SIZE}
							height={ICON_PHOTO_SIZE}
						/>
					</NextLink>
				</HoverUserCard>

				{/* <ConnectingBarWrap>
					<ConnectingBar></ConnectingBar>
				</ConnectingBarWrap> */}
			</IconPhotoWrap>

			<TweetInfoWrap>
				<UserInfoWrap>
					<HoverUserCard
						align="center"
						userId={props.user.id}
						userName={props.user.userName}
						profileBody={props.user.profileBody}
						iconPhoto="/oden.jpg"
						followingCount="40"
						followerCount="130"
					>
						<NextLink href={`/${props.userId}`}>
							<UserName>{props.user.userName}</UserName>
							<UserId>{`@${props.user.id}`}</UserId>{" "}
						</NextLink>
					</HoverUserCard>

					<Dot>{"･"}</Dot>

					<CreatedAt>
						<Tooltip>10分</Tooltip>
					</CreatedAt>
				</UserInfoWrap>

				<TweetBody>{props.tweetBody}</TweetBody>

				<TweetActionGroup
					retweetCount={props.retweetCount.count}
					likeCount={props.likeCount.count}
					commentCount={props.commentCount.count}
				/>
			</TweetInfoWrap>

			<EditButtonWrap>
				<IconButton color="primary" onClick={(e) => handleClickDisabled(e)}>
					<DotsHorizontalIcon />
				</IconButton>
			</EditButtonWrap>
		</TweetWrap>
	);
};

const TweetWrap = styled("div", {
	position: "relative",
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

// const ConnectingBarWrap = styled("div", {
// 	position: "relative",
// 	display: "flex",
// 	justifyContent: "center",
// });

// const ConnectingBar = styled("div", {
// 	position: "absolute",
// 	top: 0,
// 	height: 45,
// 	borderLeft: "2px solid $slate11",
// });

const TweetInfoWrap = styled("div", {
	display: "flex",
	flexDirection: "column",
	paddingLeft: "0.25rem",
	width: "100%",
});

const UserInfoWrap = styled("div", {
	display: "flex",
	color: "$slate11",
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

const TweetBody = styled("div", {
	whiteSpace: "pre-wrap",
	wordWrap: "break-word",
});

const EditButtonWrap = styled("span", {
	position: "absolute",
	top: "0.25rem",
	right: "0.25rem",
	cursor: "pointer",
});
