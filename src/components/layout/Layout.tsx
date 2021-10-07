import type { ReactNode, VFC } from "react";
import { Navigator as NavigatorComponent } from "src/components/layout/Navigator";
// import { ThemeChanger } from "src/components/theme";
import { styled } from "src/utils";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
	return (
		<>
			{/* <div className="fixed right-0 bottom-3">
				<ThemeChanger />
			</div> */}

			<BodyWrap>
				<NavigatorWrap>
					<NavigatorComponent />
				</NavigatorWrap>

				<MainWrap>
					<Main>{props.children}</Main>
				</MainWrap>
			</BodyWrap>
		</>
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
	borderRight: "1px solid $slate6",
	minWidth: "70px",

	"@sm": {
		flex: 1,
		minWidth: "70px",
	},
	"@xl": {
		minWidth: "260px",
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
});

const Main = styled("div", {
	display: "flex",
	justifyContent: "start",
	borderRight: "1px solid $slate6",

	width: "100",

	"@xs": {
		width: "100%",
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
