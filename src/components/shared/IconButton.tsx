import type { ReactNode, VFC } from "react";
import { styled } from "src/utils";

type Props = {
	children?: ReactNode;
	color: "primary" | "red" | "slate" | "amber" | "green";
	size?: "lg" | "xl";
	count: string;
};

const ZeroCheck = (count: string): string | null => {
	return count === "0" ? null : count;
};

export const CountLabelIconButton: VFC<Props> = (props) => {
	return (
		<IconButtonWrap>
			<IconButton color={props.color} size={props.size}>
				{props.children}
			</IconButton>
			<CountLabel>{ZeroCheck(props.count)}</CountLabel>
		</IconButtonWrap>
	);
};

const IconButtonWrap = styled("div", {
	position: "relative",

	display: "flex",
	alignItems: "center",
	gap: "0.25rem",
});

const CountLabel = styled("span", {
	position: "absolute",
	right: -5,

	color: "$slate11",
	fontSize: "0.75rem",
});

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

			primary: {
				"&:hover": { color: "$primary9", backgroundColor: "$primary3" },
			},
			red: { "&:hover": { color: "$red9", backgroundColor: "$red3" } },
			amber: { "&:hover": { color: "$amber9", backgroundColor: "$amber3" } },
			green: { "&:hover": { color: "$green9", backgroundColor: "$green3" } },
		},
	},

	defaultVariants: {
		size: "base",
	},
});
