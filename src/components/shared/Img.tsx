import { styled } from "src/utils";

export const Img = styled("img", {
	display: "block",
	borderRadius: "100%",
	variants: {
		size: {
			normal: { width: 45, height: 45 },
			large: { width: 60, height: 60 },
		},
	},
	defaultVariants: {
		size: "normal",
	},
});
