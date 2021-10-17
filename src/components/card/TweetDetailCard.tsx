import Image from "next/image";
import type { MouseEvent, VFC } from "react";
import { useCallback } from "react";
import { TweetActionGroup } from "src/components/card/TweetActionGroup";
import type { TweetCardProps } from "src/components/card/TweetCard";
import { LikeDetailDialog } from "src/components/dialog/LikeDetailDialog";
import { RetweetDetailDialog } from "src/components/dialog/RetweetDetailDialog";
import { CommentForm } from "src/components/form/CommentForm";
import { Flex, IconButton, NextLink } from "src/components/shared";
import { DotsHorizontalIcon } from "src/components/shared/Icon";
import { HoverUserCard } from "src/components/tooltip/HoverUserCard";
import { ICON_PHOTO_SIZE } from "src/constants/icon";
import { styled } from "src/utils";

export type Comment = {
	id: number;
	commentBody: string;
	createdAt: Date;
	user: {
		id: string;
		userName: string;
		profileBody: string;
		iconPhoto: string;
		isFollow: boolean;
	};
	isLike: boolean;
	isRetweet: boolean;
};

export type TweetDetailCardProps = TweetCardProps & {
	comment?: Comment[];
};

export const TweetDetailCard: VFC<TweetDetailCardProps> = (props) => {
	const handleClickDisabled = useCallback((e: MouseEvent) => {
		e.preventDefault();
	}, []);

	return (
		<Wrap>
			<UserInfoWrap>
				<HoverUserCard
					align="start"
					userId={props.user.id}
					userName={props.user.userName}
					profileBody={props.user.profileBody}
					iconPhoto="/oden.jpg"
					followingCount="40"
					followerCount="130"
					isFollow={props.user.isFollow}
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

				<HoverUserCard
					align="center"
					userId={props.user.id}
					userName={props.user.userName}
					profileBody={props.user.profileBody}
					iconPhoto="/oden.jpg"
					followingCount="40"
					followerCount="130"
					isFollow={props.user.isFollow}
				>
					<NextLink href={`/${props.userId}`}>
						<Flex direction="col">
							<UserName>{props.user.userName}</UserName>
							<UserId>{`@${props.user.id}`}</UserId>
						</Flex>
					</NextLink>
				</HoverUserCard>
			</UserInfoWrap>

			<TweetBody>{props.tweetBody}</TweetBody>

			<CreatedAt>午前10:00・2021年10月10日</CreatedAt>

			{props.retweetCount.count !== "0" || props.likeCount.count !== "0" ? (
				<CountGroupWrap>
					{props.retweetCount.count !== "0" ? (
						<RetweetDetailDialog tweetId={props.id}>
							<TextWrap>
								<CountWrap>
									<CountText>{props.retweetCount.count}</CountText>&nbsp;件のリツイート
								</CountWrap>
							</TextWrap>
						</RetweetDetailDialog>
					) : null}

					{props.likeCount.count !== "0" ? (
						<LikeDetailDialog tweetId={props.id}>
							<TextWrap>
								<CountWrap>
									<CountText>{props.likeCount.count}</CountText>&nbsp;件のいいね
								</CountWrap>
							</TextWrap>
						</LikeDetailDialog>
					) : null}
				</CountGroupWrap>
			) : null}

			<TweetActionGroupWrap>
				<TweetActionGroup detail isLike={props.isLike} isRetweet={props.isRetweet} />
			</TweetActionGroupWrap>

			<CommentForm userId={props.userId} />

			<EditButtonWrap>
				<IconButton color="primary" onClick={(e) => handleClickDisabled(e)}>
					<DotsHorizontalIcon />
				</IconButton>
			</EditButtonWrap>
		</Wrap>
	);
};

const Wrap = styled("div", {
	position: "relative",
	paddingX: "1rem",
	paddingTop: "0.75rem",
	width: "100%",
	borderBottom: "1px solid $slate6",
});

const UserInfoWrap = styled("div", {
	display: "flex",
	gap: "0.75rem",
});

const UserName = styled("span", {
	paddingRight: "0.5rem",
	color: "$slate12",
	fontWeight: "bold",
	fontSize: "1rem",
	"&:hover": { textDecoration: "underline" },
});

const UserId = styled("span", {
	color: "$slate11",
	textDecoration: "none",
	lineHeight: "1rem",
	fontSize: "0.95rem",
});

const TweetBody = styled("div", {
	paddingY: "0.25rem",
	fontSize: "1.5rem",
	whiteSpace: "pre-wrap",
	wordWrap: "break-word",
});

const CreatedAt = styled("div", {
	paddingY: "0.75rem",
	color: "$slate11",
	"&:hover": { textDecoration: "underline" },
});

const CountGroupWrap = styled("div", {
	display: "flex",
	gap: "1.25rem",
	paddingY: "1em",
	borderTop: "1px solid $slate6",
});

const TextWrap = styled("span", {
	"&:hover": { textDecoration: "underline" },
});

const CountWrap = styled("span", {
	color: "$slate11",
	fontSize: "0.85rem",
});

const CountText = styled("span", {
	color: "$slate12",
	fontWeight: 700,
	fontSize: "1rem",
});

const TweetActionGroupWrap = styled("div", {
	borderTop: "1px solid $slate6",
	borderBottom: "1px solid $slate6",
});

const EditButtonWrap = styled("span", {
	position: "absolute",
	top: "0.5rem",
	right: "0.25rem",
	cursor: "pointer",
});
