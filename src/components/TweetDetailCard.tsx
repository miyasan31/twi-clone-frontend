import Image from "next/image";
import type { VFC } from "react";
import { useMemo } from "react";
import { CommentForm } from "src/components/CommentForm";
import { HoverUserCard } from "src/components/HoverUserCard";
import { Flex, NextLink } from "src/components/shared";
import { TweetActionGroup } from "src/components/TweetActionGroup";
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

	return (
		<Wrap>
			<UserInfoWrap>
				<HoverUserCard
					userId={props.user.id}
					userName={props.user.userName}
					profileBody={props.user.profileBody}
					iconPhoto="/oden.jpg"
					followingCount="40"
					followerCount="130"
				>
					<NextLink href={href}>
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
					userId={props.user.id}
					userName={props.user.userName}
					profileBody={props.user.profileBody}
					iconPhoto="/oden.jpg"
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

			<TweetActionGroupWrap>
				<TweetActionGroup detail />
			</TweetActionGroupWrap>

			<CommentForm userId={props.userId} />
		</Wrap>
	);
};

const Wrap = styled("div", {
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

const TweetActionGroupWrap = styled("div", {
	borderTop: "1px solid $slate6",
	borderBottom: "1px solid $slate6",
});
