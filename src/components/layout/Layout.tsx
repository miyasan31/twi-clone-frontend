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
					<Navigator>
						<NavigatorComponent />
					</Navigator>
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
	flex: 1,
	display: "flex",
	justifyContent: "end",
	overflowY: "auto",
	borderRight: "1px solid $slate6",
});

const Navigator = styled("div", {
	backgroundColor: "#eaf1ff",
});

const MainWrap = styled("div", {
	flex: 3,
	overflowY: "auto",
	minWidth: "1000px",
});

const Main = styled("div", {
	display: "flex",
	justifyContent: "start",
	width: "1000px",
	backgroundColor: "#ffeaea",
});
