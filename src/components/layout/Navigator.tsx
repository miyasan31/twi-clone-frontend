import { NextLink } from "src/components/shared";
import { BellIcon, HomeIcon, MagicWandIcon, PencilIcon, PersonIcon, TwitterIcon } from "src/components/shared/Icon";
import { styled } from "src/utils";

export const NAVIGATOR = [
	{ href: "/home", label: "ホーム", icon: <HomeIcon /> },
	{ href: "/home", label: "通知", icon: <BellIcon /> },
	{ href: "/home", label: "プロフィール", icon: <PersonIcon /> },
	{ href: "/setting/theme", label: "テーマ変更", icon: <MagicWandIcon /> },
];

export const Navigator = () => {
	return (
		<Wrapper>
			<NextLink href="/">
				<TwitterIconButton>
					<TwitterIcon />
				</TwitterIconButton>
			</NextLink>

			{NAVIGATOR.map((item) => (
				<NextLink key={item.label} href={item.href} display="inlineBlock" wFull>
					<NavigatorButtonWrap>
						<NavigatorButton>
							{item.icon}
							{item.label ? <Label>{item.label}</Label> : null}
						</NavigatorButton>
					</NavigatorButtonWrap>
				</NextLink>
			))}

			<TweetButton>
				<PencilIconWrap>
					<PencilIcon />
				</PencilIconWrap>

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

const TwitterIconButton = styled("button", {
	width: "fit-content",
	marginX: "auto",
	padding: "0.75rem",

	fontSize: "1.2rem",
	color: "$slate12",
	backgroundColor: "none",
	borderRadius: 99999,

	"&:hover": {
		backgroundColor: "$primary4",
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

	"&:hover": {
		backgroundColor: "$primary10",
	},

	"@xl": {
		display: "block",

		paddingY: "0.75rem",
		paddingX: "3.5rem",

		fontSize: "1.2rem",
		fontWeight: "bold",
	},
});

const PencilIconWrap = styled("span", {
	display: "block",
	"@xl": { display: "none" },
});

const TweetLabel = styled("span", {
	display: "none",
	"@xl": { display: "block" },
});
