import type { ReactNode, VFC } from "react";
import { Navigator as NavigatorComponent } from "src/components/layout/Navigator";
import { styled } from "src/utils";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
	return (
		<BodyWrap>
			<NavigatorWrap>
				<NavigatorComponent />
			</NavigatorWrap>

			<MainWrap>
				<Main>{props.children}</Main>
			</MainWrap>
		</BodyWrap>
	);
};

const BodyWrap = styled("div", {
	display: "flex",
	maxHeight: "100vh",
	minWidth: "100vw",
});

const NavigatorWrap = styled("div", {
	flex: "none",
	display: "flex",
	justifyContent: "end",
	overflowY: "auto",
	minWidth: "70px",
	height: "100vh",

	"@sm": {
		flex: 1,
		minWidth: "70px",
	},
	"@xl": {
		minWidth: "280px",
	},
	"@xxl": {
		flex: 1,
	},
});

const MainWrap = styled("div", {
	overflowY: "auto",

	width: "100%",
	flex: 1,
	"@xs": {
		flex: 1,
	},
	"@sm": {
		flex: 5,
		minWidth: "590px",
	},
	"@md": {
		flex: 8,
		minWidth: "900px",
	},
	"@lg": {
		flex: 6,
		minWidth: "990px",
	},
	"@xl": {
		flex: 3,
		minWidth: "1000px",
	},
	"@xxl": {
		flex: 2.2,
	},
});

const Main = styled("div", {
	display: "flex",
	justifyContent: "start",
	width: "100%",
	minHeight: "100vh",
	borderLeft: "1px solid $slate6",

	"@xs": {
		width: "100%",
		borderRight: "1px solid $slate6",
	},
	"@sm": {
		width: "590px",
	},
	"@md": {
		width: "900px",
	},
	"@lg": {
		width: "990px",
	},
	"@xl": {
		width: "1000px",
	},
});
