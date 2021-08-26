import { amber, blue, crimson, gray, grayA, green, orange, red, slate, slateA, violet } from "@radix-ui/colors";
import { createCss } from "@stitches/react";

import { utils } from "./utils";

/**
 * @package
 */
export const { styled, css, global, keyframes, getCssString, theme } = createCss({
	utils: utils,
	media: {
		sm: "(min-width: 600px)",
		md: "(min-width: 986px)",
		lg: "(min-width: 1024px)",
		xl: "(min-width: 1280px)",
	},
	theme: {
		colors: {
			...blue,
			...red,
			...gray,
			...grayA,
			...slate,
			...slateA,
			...amber,
			...crimson,
			...orange,
			...violet,
			...green,
		},
		space: {
			// 1: "5px",
		},
		fontSizes: {
			// 1: "12px",
		},
		fonts: {
			untitled: "Untitled Sans, apple-system, sans-serif",
			mono: "Söhne Mono, menlo, monospace",
		},
		fontWeights: {},
		lineHeights: {},
		letterSpacings: {},
		sizes: {},
		borderWidths: {},
		borderStyles: {},
		radii: {},
		shadows: {
			sm: "2px 2px 5px $colors$slate7",
			base: "2px 2px 10px $colors$slate7",
		},
		zIndices: {},
		transitions: {},
	},
});

global({
	html: { fontSize: "16px" },
	// "@md": { html: { fontSize: "16px" } },
	body: { lineHeight: 1.6, color: "$gray12", backgroundColor: "$gray1" },
})();
