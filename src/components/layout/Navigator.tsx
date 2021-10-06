import { Button, NextLink } from "src/components/shared";
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

			<Button color="primary" size="xl" onClick={handleClick}>
				ツイートする
			</Button>
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
	alignItems: "start",
});

const NavigatorButton = styled("button", {
	all: "unset",
	display: "flex",
	alignItems: "center",
	borderRadius: 99999,
	cursor: "pointer",
	fontSize: "1.25rem",
	padding: "0.65rem",
	color: "$slate12",
	backgroundColor: "none",
	"&:hover": { backgroundColor: "$slate5" },
});

const Label = styled("span", {
	paddingX: "1rem",
});
