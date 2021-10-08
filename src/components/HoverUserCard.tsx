import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import type { ReactNode, VFC } from "react";
import { Button, Flex, NextLink, Text } from "src/components/shared";
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from "src/components/shared/animation";
import { CARD_ICON_PHOTO_SIZE } from "src/constants/icon_photo";
import { styled } from "src/utils";

type Props = {
	children: ReactNode;
	userId: string;
	userName: string;
	profileBody: string;
	iconPhoto: string;
	followingCount: string;
	followerCount: string;
};

export const HoverUserCard: VFC<Props> = (props) => {
	const handleClick = () => {
		console.info("click!!");
	};

	return (
		<HoverCardPrimitive.Root>
			<HoverCardPrimitive.Trigger as={ImageTrigger} href="#" rel="noreferrer noopener">
				{props.children}
			</HoverCardPrimitive.Trigger>

			<HoverCardContent sideOffset={5}>
				<HoverCardArrow offset={25} />

				<Flex direction="col">
					<Flex justify="between">
						<Image
							src={props.iconPhoto}
							alt="Picture of the author"
							className="rounded-full"
							width={CARD_ICON_PHOTO_SIZE}
							height={CARD_ICON_PHOTO_SIZE}
						/>
						<Button color="primary" onClick={handleClick}>
							フォロー
						</Button>
					</Flex>

					<Flex direction="col" gap={1}>
						<Text pt={0.5}>
							<NextLink href="/" under>
								<Text bold>{props.userName}</Text>
							</NextLink>
							<Text lineHeight={1} faded>
								{"@"}
								{props.userId}
							</Text>
						</Text>

						<Text>{props.profileBody}</Text>

						<Flex gap={1}>
							<NextLink href="/" under>
								<Flex>
									<Text bold>{props.followingCount}</Text>
									<Text faded>&nbsp;Following</Text>
								</Flex>
							</NextLink>

							<NextLink href="/" under>
								<Flex>
									<Text bold>{props.followerCount}</Text>
									<Text faded>&nbsp;Followers</Text>
								</Flex>
							</NextLink>
						</Flex>
					</Flex>
				</Flex>
			</HoverCardContent>
		</HoverCardPrimitive.Root>
	);
};

const ImageTrigger = styled("a", {
	all: "unset",
	cursor: "pointer",
	borderRadius: "100%",
	width: "fit-content",
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

export const HoverCardArrow = styled(HoverCardPrimitive.Arrow, {
	fill: "$slate2",
});
