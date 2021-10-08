import Image from "next/image";
import type { VFC } from "react";
import { HoverUserCard } from "src/components/HoverUserCard";
import { IconGroup } from "src/components/IconGroup";
import { NextLink } from "src/components/shared";
import { Tooltip } from "src/components/ToolTip";
import { ICON_PHOTO_SIZE } from "src/constants/icon_photo";
import { styled } from "src/utils";

type Props = {
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

export const TweetCard: VFC<Props> = (props) => {
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
					<NextLink href="/">
						<Image
							src="/myicon.jpg"
							alt="Picture of the author"
							className="rounded-full"
							width={ICON_PHOTO_SIZE}
							height={ICON_PHOTO_SIZE}
						/>
					</NextLink>
				</HoverUserCard>
			</IconPhotoWrap>

			<TweetContent>
				<TweetBox>
					<TweetHead>
						<HoverUserCard
							userId={props.user.id}
							userName={props.user.userName}
							profileBody={props.user.profileBody}
							iconPhoto="/myicon.jpg"
							followingCount="40"
							followerCount="130"
						>
							<NextLink href="/">
								<UserName>{props.user.userName}</UserName>
								<UserId>{`@${props.user.id}`}</UserId>
							</NextLink>
						</HoverUserCard>

						<Dot>{"･"}</Dot>

						<Tooltip>
							<CreatedAt>10分</CreatedAt>
						</Tooltip>
					</TweetHead>

					<TweetBody>{props.tweetBody}</TweetBody>
				</TweetBox>

				<IconGroup
					retweetCount={props.retweetCount.count}
					likeCount={props.likeCount.count}
					commentCount={props.commentCount.count}
				/>
			</TweetContent>
		</TweetWrap>
	);
};

const TweetWrap = styled("div", {
	display: "flex",
	paddingX: "1.25rem",
	paddingTop: "0.75rem",
	width: "100%",
	border: "1px solid $slate6",
	"&:hover": { backgroundColor: "$slate3" },
});

const TweetContent = styled("div", {
	display: "flex",
	flexDirection: "column",
	paddingLeft: "0.25rem",
	width: "100%",
});

const TweetBox = styled("div", {
	paddingLeft: "0.5rem",
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

const CreatedAt = styled("span", {
	"&:hover": { textDecoration: "underline" },
});

const TweetHead = styled("div", {
	color: "$slate10",
});
const Dot = styled("span", {
	paddingX: "0.25rem",
});
const IconPhotoWrap = styled("div", {});
const TweetBody = styled("div", {});
