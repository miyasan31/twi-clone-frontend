import type { MouseEventHandler, ReactNode, VFC } from "react";
import { styled } from "src/utils";

type Props = {
	children?: ReactNode;
	color: "primary" | "blue" | "red" | "slate" | "amber" | "yellow" | "green";
	size?: "lg" | "xl";
	count?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ZeroCheck = (count: string | undefined): string | null => {
	if (count === undefined) return null;
	return count === "0" ? null : count;
};

export const CountLabelIconButton: VFC<Props> = (props) => {
	return (
		<IconButton color={props.color} size={props.size} onClick={props.onClick}>
			{props.children}
			<CountLabel>{ZeroCheck(props.count)}</CountLabel>
		</IconButton>
	);
};

const CountLabel = styled("span", {
	position: "absolute",
	left: 40,
	color: "$slate11",
	fontSize: "0.75rem",
});

export const IconButton = styled("button", {
	all: "unset",
	position: "relative",
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
				"&:hover": { backgroundColor: "$slate6", color: "$primary10" },
			},

			primary: {
				"&:hover": {
					color: "$primary9",
					backgroundColor: "$primary3",
				},
			},
			blue: {
				"&:hover": {
					color: "$blue9",
					backgroundColor: "$blue3",
					[`& ${CountLabel}`]: { color: "$blue9" },
				},
			},
			red: {
				"&:hover": {
					color: "$red9",
					backgroundColor: "$red3",
					[`& ${CountLabel}`]: { color: "$red9" },
				},
			},
			green: {
				"&:hover": {
					color: "$green9",
					backgroundColor: "$green3",
					[`& ${CountLabel}`]: { color: "$green9" },
				},
			},
			amber: {
				"&:hover": {
					color: "$amber9",
					backgroundColor: "$amber3",
					[`& ${CountLabel}`]: { color: "$amber9" },
				},
			},
			yellow: {
				"&:hover": {
					color: "$yellow10",
					backgroundColor: "$amber3",
					[`& ${CountLabel}`]: { color: "$yellow9" },
				},
			},
		},
	},

	defaultVariants: {
		size: "base",
	},
});
