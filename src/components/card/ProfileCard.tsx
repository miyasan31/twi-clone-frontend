import Image from "next/image";
import type { MouseEvent, VFC } from "react";
import { Button, NextLink } from "src/components/shared";
import { HoverUserCard } from "src/components/tooltip/HoverUserCard";
import { ICON_PHOTO_SIZE } from "src/constants/icon";
import { styled } from "src/utils";

export type UserType = {
	id: string;
	userName: string;
	profileBody: string;
	isFollow?: boolean;
};

export type ProfileCardProps = {
	id: number;
	userId: string;
	user: UserType;
};

const handleClick = (e: MouseEvent) => {
	e.preventDefault();
	console.info("saaa");
};

export const ProfileCard: VFC<ProfileCardProps> = (props) => {
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
			</IconPhotoWrap>

			<TweetInfoWrap>
				<UserInfoWrap>
					<div>
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
								<UserName>{props.user.userName}</UserName>
								<UserId>{`@${props.user.id}`}</UserId>{" "}
							</NextLink>
						</HoverUserCard>
					</div>

					<Button color="slate" isOutline onClick={(e) => handleClick(e)}>
						フォロー中
					</Button>
				</UserInfoWrap>

				<TweetBody>{props.user.profileBody}</TweetBody>
			</TweetInfoWrap>
		</TweetWrap>
	);
};

const TweetWrap = styled("div", {
	position: "relative",
	display: "flex",
	gap: "0.5rem",
	paddingX: "1rem",
	paddingY: "0.75rem",
	width: "100%",
	"&:hover": { backgroundColor: "$slate3" },
});

const IconPhotoWrap = styled("div", {
	minWidth: "fit-content",
});

const TweetInfoWrap = styled("div", {
	display: "flex",
	flexDirection: "column",
	paddingLeft: "0.25rem",
	width: "100%",
});

const UserInfoWrap = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	color: "$slate11",
});

const UserName = styled("div", {
	paddingRight: "0.5rem",
	color: "$slate12",
	fontWeight: "bold",
	lineHeight: "1rem",
	"&:hover": { textDecoration: "underline" },
});

const UserId = styled("div", {
	textDecoration: "none",
});

const TweetBody = styled("div", {});
