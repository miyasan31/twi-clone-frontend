import type { ReactNode, VFC } from "react";
import { useMemo } from "react";
import { styled } from "src/utils";

type Props = {
	children: ReactNode;
	size?: "xs" | "sm" | "base" | "lg" | "xl" | "x2l" | "x3l" | "x4l";
	color?: "blue" | "red";
	bold?: true;
	faded?: true;
	under?: true;
	pt?: number;
	py?: number;
	pb?: number;
	fontSize?: number;
	lineHeight?: number;
};

export const Text: VFC<Props> = (props) => {
	const pt: string = useMemo(() => props.pt + "rem", []);
	const py: string = useMemo(() => props.py + "rem", []);
	const pb: string = useMemo(() => props.pb + "rem", []);
	const fontSize: string = useMemo(() => props.fontSize + "rem", []);
	const lineHeight: string = useMemo(() => props.lineHeight + "rem", []);

	return (
		<StitchesText
			bold={props.bold}
			faded={props.faded}
			under={props.under}
			color={props.color}
			size={props.size}
			css={{
				paddingTop: pt,
				paddingY: py,
				paddingBottom: pb,

				fontSize: fontSize,
				lineHeight: lineHeight,
			}}
		>
			{props.children}
		</StitchesText>
	);
};

export const StitchesText = styled("div", {
	margin: 0,
	padding: 0,
	color: "$slate12",
	overflowWrap: "break-word",
	textDecoration: "none",

	variants: {
		size: {
			xs: { fontSize: "$xs" },
			sm: { fontSize: "$sm" },
			base: { fontSize: "$base" },
			lg: { fontSize: "$lg" },
			xl: { fontSize: "$xl" },
			x2l: { fontSize: "$x2l" },
			x3l: { fontSize: "$x3l" },
			x4l: { fontSize: "$x4l" },
			x5l: { fontSize: "$x5l" },
			x6l: { fontSize: "$x6l" },
			x7l: { fontSize: "$x7l" },
			x8l: { fontSize: "$x8l" },
			x9l: { fontSize: "$x9l" },
		},

		color: {
			blue: { color: "$blue9" },
			red: { color: "$red9" },
		},

		faded: {
			true: { color: "$slate11" },
		},
		bold: {
			true: { fontWeight: 700 },
		},
		under: {
			true: { "&:hover": { textDecoration: "underline" } },
		},
	},

	defaultVariants: {
		// size: "base",
	},
});
