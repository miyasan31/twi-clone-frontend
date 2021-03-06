import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import type { MouseEvent, ReactNode, VFC } from "react";
import { useCallback } from "react";
import { Button, Flex, NextLink, Text } from "src/components/shared";
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from "src/components/shared/animation";
import { CARD_ICON_PHOTO_SIZE } from "src/constants/icon";
import { styled } from "src/utils";

type Props = {
	children: ReactNode;
	userId: string;
	userName: string;
	profileBody: string;
	align: "start" | "center" | "end";
	iconPhoto: string;
	followingCount: string;
	followerCount: string;
	isFollow?: boolean;
};

export const HoverUserCard: VFC<Props> = (props) => {
	const handleClickDisabled = useCallback((e: MouseEvent) => {
		e.preventDefault();
	}, []);

	const handleClick = useCallback(() => {
		console.info("click!!");
	}, []);

	return (
		<HoverCardPrimitive.Root>
			<HoverCardPrimitive.Trigger>{props.children}</HoverCardPrimitive.Trigger>

			<HoverCardContent sideOffset={5} align={props.align} onClick={(e) => handleClickDisabled(e)}>
				<HoverCardArrow offset={25} />

				<Flex direction="col">
					<Flex justify="between">
						<NextLink href={`/${props.userId}`}>
							<Image
								src={props.iconPhoto}
								alt="Picture of the author"
								className="rounded-full"
								width={CARD_ICON_PHOTO_SIZE}
								height={CARD_ICON_PHOTO_SIZE}
							/>
						</NextLink>
						<Button color="primary" onClick={handleClick}>
							{props.isFollow ? "フォロー中" : "フォローする"}
						</Button>
					</Flex>

					<Flex direction="col" gap={1}>
						<Text pt={0.5}>
							<NextLink href={`/${props.userId}`}>
								<Text bold under>
									{props.userName}
								</Text>
								<Text lineHeight={1} faded>
									{"@"}
									{props.userId}
								</Text>
							</NextLink>
						</Text>

						<Text>{props.profileBody}</Text>

						<Flex gap={1}>
							<TextWrap>
								<NextLink href={`/${props.userId}/followings`}>
									<FollowCount>
										<CountText>{props.followingCount}</CountText>
										&nbsp;フォロー中
									</FollowCount>
								</NextLink>
							</TextWrap>

							<TextWrap>
								<NextLink href={`/${props.userId}/followers`}>
									<FollowCount>
										<CountText>{props.followerCount}</CountText>&nbsp;フォロワー
									</FollowCount>
								</NextLink>
							</TextWrap>
						</Flex>
					</Flex>
				</Flex>
			</HoverCardContent>
		</HoverCardPrimitive.Root>
	);
};

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

export const HoverCardArrow = styled(HoverCardPrimitive.Arrow, {
	fill: "$slate3",
});

export const HoverCardContent = styled(HoverCardPrimitive.Content, {
	width: 300,
	borderRadius: "1rem",
	padding: "1.25rem",
	backgroundColor: "$slate3",
	boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	"@media (prefers-reduced-motion: no-preference)": {
		animationDuration: "400ms",
		animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
		willChange: "transform, opacity",
		'&[data-state="open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
			'&[data-side="right"]': { animationName: slideLeftAndFade },
			'&[data-side="bottom"]': { animationName: slideUpAndFade },
			'&[data-side="left"]': { animationName: slideRightAndFade },
		},
	},
});
