import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled } from "@stitches/react";
import type { ReactNode, VFC } from "react";
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from "src/components/shared/animation";

type Props = {
	children: ReactNode;
};

export const Tooltip: VFC<Props> = (props) => {
	return (
		<TooltipPrimitive.Root>
			<TooltipPrimitive.Trigger>{props.children}</TooltipPrimitive.Trigger>
			<TooltipContent sideOffset={5}>
				午前10:00・2021年10月10日
				<StyledArrow />
			</TooltipContent>
		</TooltipPrimitive.Root>
	);
};

const StyledArrow = styled(TooltipPrimitive.Arrow, {
	fill: "$slate8",
});

const TooltipContent = styled(TooltipPrimitive.Content, {
	padding: "0.25rem",
	color: "$slate1",
	backgroundColor: "$slate11",
	borderRadius: 4,
	lineHeight: "1rem",
	fontSize: "$xs",
	boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	"@media (prefers-reduced-motion: no-preference)": {
		animationDuration: "400ms",
		animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
		willChange: "transform, opacity",
		'&[data-state="delayed-open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
			'&[data-side="right"]': { animationName: slideLeftAndFade },
			'&[data-side="bottom"]': { animationName: slideUpAndFade },
			'&[data-side="left"]': { animationName: slideRightAndFade },
		},
	},
});
