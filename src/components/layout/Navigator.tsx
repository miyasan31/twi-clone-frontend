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

			<div className="pt-2">
				<TweetButton onClick={handleClick}>
					<TweetLabel>
						<TwitterIcon size={35} />
					</TweetLabel>
					<Label>ツイートする</Label>
				</TweetButton>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingX: "1rem",

	"@xl": {
		minWidth: "260px",
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
	padding: "0.5rem",
	color: "white",
	backgroundColor: "$primary9",
	borderRadius: 99999,
	cursor: "pointer",

	"&:hover": { backgroundColor: "$primary11" },

	"@xl": {
		display: "block",
		paddingY: "0.75rem",
		paddingX: "3rem",
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
	paddingRight: "0.75rem",
	display: "none",

	"@xl": {
		display: "block",
	},
});
