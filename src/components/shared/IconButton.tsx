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

	// $$shadowColor: "$colors$slateA8",

	variants: {
		size: {
			base: { square: 35 },
			md: { square: 40 },
			lg: { square: 45 },
		},

		shadow: {
			// true: { boxShadow: "0 0 10px $$shadowColor" },
			true: { boxShadow: "$base" },
		},

		color: {
			blue: {
				color: "$gray9",
				"&:hover": { color: "$blue9", backgroundColor: "$blue3" },
			},
			red: {
				color: "$gray9",
				"&:hover": { color: "$red9", backgroundColor: "$red3" },
			},
			amber: {
				color: "$gray9",
				"&:hover": { color: "$amber9", backgroundColor: "$amber3" },
			},
			crimson: {
				color: "$gray9",
				"&:hover": { color: "$crimson9", backgroundColor: "$crimson3" },
			},
			violet: {
				color: "$gray9",
				"&:hover": { color: "$violet9", backgroundColor: "$violet3" },
			},
			orange: {
				color: "$gray9",
				"&:hover": { color: "$orange9", backgroundColor: "$orange3" },
			},
			green: {
				color: "$gray9",
				"&:hover": { color: "$green9", backgroundColor: "$green3" },
			},
		},
	},

	defaultVariants: {
		size: "base",
	},
});

type Props = {
	children?: ReactNode;
	color: "blue" | "red" | "amber" | "crimson" | "violet" | "orange" | "green";
	count?: number;
	shadow?: true;
};

export const CountLabelIconButton: VFC<Props> = (props) => {
	return (
		<Flex items="center" gap={0.25}>
			<IconButton color={props.color} shadow={props.shadow}>
				{props.children}
			</IconButton>
			<Text faded>{props.count}</Text>
		</Flex>
	);
};
