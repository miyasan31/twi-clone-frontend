import type { NextPage } from "next";
import { Navigator } from "src/components/layout/Navigator";
import { ThemeChanger } from "src/components/theme";
import { styled } from "src/utils";

const HomePage: NextPage = (props) => {
	return (
		<>
			<div className="fixed right-0 bottom-3">
				<ThemeChanger />
			</div>

			<Layout>
				<Left>
					<Navigator />
				</Left>

				<Main>{props.children}</Main>

				<Right></Right>
			</Layout>
		</>
	);
};

// eslint-disable-next-line import/no-default-export
export default HomePage;

const Layout = styled("div", {
	display: "flex",
});

const Left = styled("div", {
	display: "flex",
	justifyContent: "end",
	width: "360px",
	paddingTop: "0.25rem",
	paddingRight: "2rem",
});

const Main = styled("div", {
	height: "100vh",
	width: "600px",
	borderRight: "1px solid $slate6",
	borderLeft: "1px solid $slate6",
});

const Right = styled("div", {
	flex: 1,
});
