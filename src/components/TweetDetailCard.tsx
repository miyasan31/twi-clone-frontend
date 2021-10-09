import Image from "next/image";
import type { VFC } from "react";
import { useCallback, useMemo } from "react";
import { HoverUserCard } from "src/components/HoverUserCard";
import { IconGroup } from "src/components/IconGroup";
import { Button, Flex, NextLink } from "src/components/shared";
import type { TweetCardProps } from "src/components/TweetCard";
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
	};
};

export type TweetDetailCardProps = TweetCardProps & {
	comment?: Comment[];
};

export const TweetDetailCard: VFC<TweetDetailCardProps> = (props) => {
	const href = useMemo(() => {
		return `/${props?.userId}`;
	}, [props.userId]);

	const handleSubmit = useCallback(() => {
		console.info("aaaaaaa");
	}, []);

	return (
		<TweetDetailWrap>
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
						<Image
							src="/myicon.jpg"
							alt="Picture of the author"
							className="rounded-full"
							width={ICON_PHOTO_SIZE}
							height={ICON_PHOTO_SIZE}
						/>
					</NextLink>
				</HoverUserCard>

				<HoverUserCard
					userId={props.user.id}
					userName={props.user.userName}
					profileBody={props.user.profileBody}
					iconPhoto="/myicon.jpg"
					followingCount="40"
					followerCount="130"
				>
					<NextLink href={href}>
						<Flex direction="col">
							<UserName>{props.user.userName}</UserName>
							<UserId>{`@${props.user.id}`}</UserId>
						</Flex>
					</NextLink>
				</HoverUserCard>
			</UserInfoWrap>

			<TweetBody>{props.tweetBody}</TweetBody>

			<CreatedAt>午前10:00・2021年10月10日</CreatedAt>

			<CountGroupWrap>
				<TextWrap>
					<NextLink href="/">
						<CountWrap>
							<CountText>11</CountText>&nbsp;件のリツイート
						</CountWrap>
					</NextLink>
				</TextWrap>

				<TextWrap>
					<NextLink href="/">
						<CountWrap>
							<CountText>11</CountText>&nbsp;件のいいね
						</CountWrap>
					</NextLink>
				</TextWrap>
			</CountGroupWrap>

			<IconGroupWrap>
				<IconGroup detail />
			</IconGroupWrap>

			<CommentGroupWrap>
				<Flex items="center" gap={1}>
					<NextLink href={href}>
						<Image
							src="/myicon.jpg"
							alt="Picture of the author"
							className="rounded-full"
							width={ICON_PHOTO_SIZE}
							height={ICON_PHOTO_SIZE}
						/>
					</NextLink>
					<CommentArea>返信をツイート</CommentArea>
					<Button color="primary" onClick={handleSubmit}>
						返信
					</Button>
				</Flex>
			</CommentGroupWrap>
		</TweetDetailWrap>
	);
};

const TweetDetailWrap = styled("div", {
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
	color: "$slate10",
	textDecoration: "none",
	lineHeight: "1rem",
	fontSize: "0.95rem",
});

const TweetBody = styled("div", {
	paddingY: "0.25rem",
	fontSize: "1.5rem",
});

const CreatedAt = styled("div", {
	paddingY: "0.75rem",
	color: "$slate10",
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
	color: "$slate10",
	fontSize: "0.85rem",
});

const CountText = styled("span", {
	color: "$slate12",
	fontWeight: 700,
	fontSize: "1rem",
});

const IconGroupWrap = styled("div", {
	borderTop: "1px solid $slate6",
});

const CommentGroupWrap = styled("div", {
	paddingTop: "1.25rem",
	paddingBottom: "0.75rem",
	borderTop: "1px solid $slate6",
});

const CommentArea = styled("div", {
	flexGrow: 1,
	color: "$slate10",
	fontSize: "1.25rem",
});
