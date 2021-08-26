import { Cross2Icon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { ReactNode, VFC } from "react";
import { IconButton } from "src/components/shared";
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from "src/components/shared/animation";
import { styled } from "src/utils";

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = styled(PopoverPrimitive.Content, {
	borderRadius: 4,
	padding: 20,
	width: 260,
	backgroundColor: "white",
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
	"&:focus": {
		boxShadow:
			"hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px $violet7",
	},
});

const PopoverArrow = styled(PopoverPrimitive.Arrow, {
	fill: "white",
});

const PopoverClose = styled(PopoverPrimitive.Close, {
	all: "unset",
	fontFamily: "inherit",
	borderRadius: "100%",
	height: 25,
	width: 25,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	color: "$violet11",
	position: "absolute",
	top: 5,
	right: 5,

	"&:hover": { backgroundColor: "$violet4" },
	"&:focus": { boxShadow: "0 0 0 2px $violet7" },
});

type Props = {
	children: ReactNode;
};

export const Popover: VFC<Props> = (props) => {
	return (
		<PopoverRoot>
			<PopoverTrigger as={IconButton} color="red" shadow aria-label="Update dimensions">
				<MixerHorizontalIcon />
			</PopoverTrigger>

			<PopoverContent sideOffset={5}>
				<PopoverArrow />

				{props.children}

				<PopoverClose aria-label="Close">
					<Cross2Icon />
				</PopoverClose>
			</PopoverContent>
		</PopoverRoot>
	);
};
