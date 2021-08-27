import { amber, blue, crimson, green, orange, red, slate, slateA, violet } from "@radix-ui/colors";
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
			xs: "0.75rem;",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			x2l: "1.5rem",
			x3l: "1.875rem",
			x4l: "2.25rem",
			x5l: "3rem",
			x6l: "3.75rem",
			x7l: "4.5rem",
			x8l: "6rem",
			x9l: "8rem",
		},
		fonts: {
			untitled: "Untitled Sans, apple-system, sans-serif",
			mono: "Söhne Mono, menlo, monospace",
		},
		fontWeights: {},
		lineHeights: {
			xs: "1rem;",
			sm: "1.25rem",
			base: "1.5rem",
			lg: "1.75rem",
			xl: "1.75rem",
			x2l: "2rem",
			x3l: "2.25rem",
			x4l: "2.5rem",
			x5l: "1rem",
			x6l: "1rem",
			x7l: "1rem",
			x8l: "1rem",
			x9l: "1rem",
		},
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
	body: { lineHeight: 1.6, color: "$slate12", backgroundColor: "$slate2" },
})();
