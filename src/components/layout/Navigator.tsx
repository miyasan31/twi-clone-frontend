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

			<div className="pt-4">
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
	position: "fixed",
	top: "0.25rem",
	left: "6rem",
	flexDirection: "column",
	gap: "0.5rem",
	alignItems: "center",

	"@xl": { alignItems: "start" },
});

const NavigatorButton = styled("button", {
	all: "unset",
	display: "flex",
	alignItems: "center",
	gap: "1.25rem",
	borderRadius: 99999,
	cursor: "pointer",
	fontSize: "1.25rem",
	padding: "0.65rem",
	color: "$slate12",
	backgroundColor: "none",
	"&:hover": { backgroundColor: "$slate5" },
});

const TweetButton = styled("button", {
	color: "white",
	backgroundColor: "$primary9",
	cursor: "pointer",
	borderRadius: 99999,
	fontWeight: "bold",
	padding: "0.5rem",

	"&:hover": { backgroundColor: "$primary11" },

	"@xl": {
		paddingY: "0.8rem",
		paddingX: "4rem",
		fontSize: "1rem",
		display: "block",
	},
});

const TweetLabel = styled("span", {
	display: "block",
	"@xl": { display: "none" },
});

const Label = styled("span", {
	display: "none",
	"@xl": { display: "block" },
});

// "@sm": { },
// "@md": { },
// "@lg": { },
// "@xl": { },
