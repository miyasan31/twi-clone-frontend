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

				<Right></Right>
			</Wrap>
		</>
	);
};

const Wrap = styled("div", {
	display: "flex",
});

const Left = styled("div", {
	width: "360px",
	borderRight: "1px solid $slate6",
});

const Main = styled("div", {
	height: "auto",
	width: "600px",
});

const Right = styled("div", {
	borderLeft: "1px solid $slate6",
	flex: 1,
});
