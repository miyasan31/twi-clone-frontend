import * as SwitchPrimitive from "@radix-ui/react-switch";
import type { MouseEventHandler, VFC } from "react";
import { Flex, Label } from "src/components/shared";
import { styled } from "src/utils";

const SwitchRoot = styled(SwitchPrimitive.Root, {
	all: "unset",
	width: 50,
	height: 24,
	backgroundColor: "$slate7",
	borderRadius: "9999px",
	border: "1px solid $slate11",
	boxSizing: "border-box",
	'&[data-state="checked"]': { backgroundColor: "$blue9" },

	variants: {
		isDark: {
			true: {
				backgroundColor: "$slate7",
				'&[data-state="checked"]': { backgroundColor: "$slate9" },
			},
		},
	},
});

const SwitchThumb = styled(SwitchPrimitive.Thumb, {
	display: "block",
	square: 18,
	backgroundColor: "white",
	borderRadius: "9999px",
	transition: "transform 100ms",
	transform: "translateX(2px)",
	willChange: "transform",
	'&[data-state="checked"]': { transform: "translateX(28px)" },
});

type Props = {
	onClick: MouseEventHandler<HTMLButtonElement>;
	labalLeft?: string;
	labalRight?: string;
	isDark?: true;
};

export const Switch: VFC<Props> = (props) => {
	return (
		<Flex items="center" gap={0.25}>
			<Label id="s1">{props.labalLeft}</Label>
			<SwitchRoot defaultChecked id="s1" onClick={props.onClick} isDark={props.isDark}>
				<SwitchThumb />
			</SwitchRoot>
			<Label id="s1">{props.labalRight}</Label>
		</Flex>
	);
};
