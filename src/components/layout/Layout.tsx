import type { ReactNode, VFC } from "react";
import { Navigator } from "src/components/layout/Navigator";
import { ThemeChanger } from "src/components/theme";
import { styled } from "src/utils";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
	return (
		<>
			<div className="fixed right-0 bottom-3">
				<ThemeChanger />
			</div>

			<Wrap>
				<Left>
					<Navigator />
				</Left>

				<Main>{props.children}</Main>

				<Right>これが消えたら@md</Right>
			</Wrap>
		</>
	);
};

const Wrap = styled("div", {
	display: "flex",
});

const Left = styled("div", {
	flex: 1,
	display: "flex",
	justifyContent: "end",
	minWidth: "70px",
	paddingTop: "0.25rem",
	paddingRight: "2rem",
	borderRight: "1px solid $slate6",

	"@sm": { minWidth: "70px", maxWidth: "150px" },
	"@md": { minWidth: "70px", maxWidth: "150px" },
	"@lg": { minWidth: "150px", maxWidth: "150px" },
	"@xl": { minWidth: "300px" },
});

const Main = styled("div", {
	width: "100%",
	"@md": { minWidth: "600px" },
});

const Right = styled("div", {
	flex: 1,
	borderLeft: "1px solid $slate6",
	display: "none",
	"@md": { display: "block" },
});

// "@sm": { },
// "@md": { },
// "@lg": { },
// "@xl": { },
