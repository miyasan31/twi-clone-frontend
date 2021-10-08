import { NextLink } from "src/components/shared";
import { TwitterIcon } from "src/components/shared/Icon";
import { NAVIGATOR } from "src/constants/navigator";
import { styled } from "src/utils";

export const Navigator = () => {
	const handleClick = () => {
		console.info("aaa");
	};

	return (
		<Wrapper>
			{NAVIGATOR.map((item) => {
				return (
					<NextLink key={item.label} href={item.href}>
						<NavigatorButton onClick={handleClick}>
							<TwitterIcon size={30} />
							{item.label ? <Label>{item.label}</Label> : null}
						</NavigatorButton>
					</NextLink>
				);
			})}

			<TweetButton onClick={handleClick}>
				<TweetLabel>
					<TwitterIcon size={35} />
				</TweetLabel>
				<Label>ツイートする</Label>
			</TweetButton>
		</Wrapper>
	);
};

const Wrapper = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "0.3rem",

	minWidth: "70px",
	"@sm": {
		paddingX: "1rem",
	},
	"@xl": {
		minWidth: "280px",
		alignItems: "start",
	},
});

const NavigatorButton = styled("button", {
	display: "inline-flex",
	alignItems: "center",
	gap: "1.25rem",
	padding: "0.75rem",
	borderRadius: 99999,
	cursor: "pointer",
	fontSize: "1.2rem",
	color: "$slate12",
	backgroundColor: "none",
	"&:hover": { backgroundColor: "$slate5" },
});

const TweetButton = styled("button", {
	marginTop: "1rem",
	padding: "0.5rem",
	color: "white",
	backgroundColor: "$primary9",
	borderRadius: 99999,
	cursor: "pointer",

	"&:hover": { backgroundColor: "$primary11" },

	"@xl": {
		display: "block",
		paddingY: "0.75rem",
		paddingX: "3.75rem",
		fontSize: "1.2rem",
		fontWeight: "bold",
	},
});

const TweetLabel = styled("span", {
	display: "block",

	"@xl": {
		display: "none",
	},
});

const Label = styled("span", {
	display: "none",
	"@xl": {
		display: "block",
	},
});
