import { styled } from "src/utils";

export const MainBody = styled("div", {
	minHeight: "100vh",
	paddingBottom: "200px",

	width: "100%",
	"@xs": { width: "100%" },
	"@sm": { width: "590px" },
	"@md": { width: "600px", borderRight: "1px solid $slate6" },
});
