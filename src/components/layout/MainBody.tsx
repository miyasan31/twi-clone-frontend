import { styled } from "src/utils";

export const MainBody = styled("div", {
	borderRight: "1px solid $slate6",
	width: "100%",
	"@xs": {
		width: "100%",
	},
	"@sm": {
		width: "590px",
	},
	"@md": {
		width: "600px",
	},
});
