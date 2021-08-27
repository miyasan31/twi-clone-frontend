import type { ReactNode, VFC } from "react";
import { Flex, Text } from "src/components/shared";
import { styled } from "src/utils";

export const IconButton = styled("button", {
	all: "unset",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	fontFamily: "inherit",
	borderRadius: "100%",
	cursor: "pointer",
	color: "$slate11",

	variants: {
		size: {
			base: { square: 35 },
			lg: { square: 40 },
			xl: { square: 45 },
		},

		color: {
			slate: {
				color: "$slate12",
				border: "1px solid $slate11",
				boxSizing: "border-box",
				"&:hover": { backgroundColor: "$slate6" },
			},

			blue: { "&:hover": { color: "$blue9", backgroundColor: "$blue3" } },
			red: { "&:hover": { color: "$red9", backgroundColor: "$red3" } },
			amber: { "&:hover": { color: "$amber9", backgroundColor: "$amber3" } },
			crimson: { "&:hover": { color: "$crimson9", backgroundColor: "$crimson3" } },
			violet: { "&:hover": { color: "$violet9", backgroundColor: "$violet3" } },
			orange: { "&:hover": { color: "$orange9", backgroundColor: "$orange3" } },
			green: { "&:hover": { color: "$green9", backgroundColor: "$green3" } },
		},
	},

	defaultVariants: {
		size: "base",
	},
});

type Props = {
	children?: ReactNode;
	color: "blue" | "red" | "slate" | "amber" | "crimson" | "violet" | "orange" | "green";
	count?: number;
};

export const CountLabelIconButton: VFC<Props> = (props) => {
	return (
		<Flex items="center" gap={0.25}>
			<IconButton color={props.color}>{props.children}</IconButton>
			<Text faded>{props.count}</Text>
		</Flex>
	);
};
