import { styled } from "src/utils";

export const Text = styled("div", {
	margin: 0,
	color: "$slate12",
	fontSize: 15,
	lineHeight: 1.5,
	overflowWrap: "break-word",
	variants: {
		faded: {
			true: { color: "$slate10" },
		},
		bold: {
			true: { fontWeight: 500 },
		},
	},
});
