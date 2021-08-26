import * as SwitchPrimitive from "@radix-ui/react-switch";
import type { VFC } from "react";
import { Flex, Label } from "src/components/shared";
import { styled } from "src/utils";

const SwitchRoot = styled(SwitchPrimitive.Root, {
	all: "unset",
	width: 42,
	height: 25,
	backgroundColor: "slateA4",
	borderRadius: "9999px",
	position: "relative",
	boxShadow: "$sm",
	// WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
	"&:focus": { boxShadow: `0 0 0 2px black` },
	'&[data-state="checked"]': { backgroundColor: "black" },
});

const SwitchThumb = styled(SwitchPrimitive.Thumb, {
	display: "block",
	width: 21,
	height: 21,
	backgroundColor: "white",
	borderRadius: "9999px",
	boxShadow: "$sm",
	transition: "transform 100ms",
	transform: "translateX(2px)",
	willChange: "transform",
	'&[data-state="checked"]': { transform: "translateX(19px)" },
});

export const Switch: VFC = () => {
	return (
		<Flex items="center">
			<Label id="s1">is dark</Label>
			<SwitchRoot defaultChecked id="s1">
				<SwitchThumb />
			</SwitchRoot>
		</Flex>
	);
};
