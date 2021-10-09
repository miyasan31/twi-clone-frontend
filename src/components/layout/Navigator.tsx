import { NextLink } from "src/components/shared";
import { TwitterIcon } from "src/components/shared/Icon";
import { NAVIGATOR } from "src/constants/navigator";
import { styled } from "src/utils";

export const Navigator = () => {
	return (
		<Wrapper>
			<NextLink href="/">
				<NavigatorButtonWrap>
					<NavigatorButton>
						<TwitterIcon size={30} />
					</NavigatorButton>
				</NavigatorButtonWrap>
			</NextLink>

			{NAVIGATOR.map((item) => {
				return (
					<NextLink key={item.label} href={item.href} display="inlineBlock" wFull>
						<NavigatorButtonWrap>
							<NavigatorButton>
								<TwitterIcon size={30} />
								{item.label ? <Label>{item.label}</Label> : null}
							</NavigatorButton>
						</NavigatorButtonWrap>
					</NextLink>
				);
			})}

			<TweetButton>
				<TweetIconWrap>
					<TwitterIcon size={35} />
				</TweetIconWrap>
				<TweetLabel>ツイートする</TweetLabel>
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
	paddingX: "0.5rem",

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

	width: "fit-content",
	padding: "0.75rem",

	fontSize: "1.2rem",
	color: "$slate12",
	backgroundColor: "none",
	borderRadius: 99999,
});

const NavigatorButtonWrap = styled("div", {
	"&:hover": {
		[`& ${NavigatorButton}`]: { backgroundColor: "$slate5" },
	},
});

const Label = styled("span", {
	paddingRight: "0.75rem",

	display: "none",
	"@xl": { display: "block" },
});

const TweetButton = styled("button", {
	marginTop: "1rem",
	padding: "0.5rem",

	color: "white",
	backgroundColor: "$primary9",
	borderRadius: 99999,
	cursor: "pointer",

	"@xl": {
		display: "block",

		paddingY: "0.75rem",
		paddingX: "3.5rem",

		fontSize: "1.2rem",
		fontWeight: "bold",
	},
});

const TweetIconWrap = styled("span", {
	display: "block",
	"@xl": { display: "none" },
});

const TweetLabel = styled("span", {
	display: "none",
	"@xl": { display: "block" },
});
