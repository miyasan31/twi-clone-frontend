import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import type { VFC } from "react";
import { Flex, Label } from "src/components/shared";
import { styled } from "src/utils";

const RadioGroupRadio = styled(RadioGroupPrimitive.Item, {
	all: "unset",
	backgroundColor: "white",
	width: 25,
	height: 25,
	borderRadius: "100%",
	boxShadow: "$sm",

	variants: {
		color: {
			blue: { "&:hover": { backgroundColor: "$blue3" } },
			amber: { "&:hover": { backgroundColor: "$amber3" } },
			crimson: { "&:hover": { backgroundColor: "$crimson3" } },
			violet: { "&:hover": { backgroundColor: "$violet3" } },
			orange: { "&:hover": { backgroundColor: "$orange3" } },
			green: { "&:hover": { backgroundColor: "$green3" } },
		},
	},
});

const RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "100%",
	position: "relative",
	"&::after": {
		content: '""',
		display: "block",
		width: 11,
		height: 11,
		borderRadius: "50%",
	},

	variants: {
		color: {
			blue: { "&::after": { backgroundColor: "$blue9" } },
			amber: { "&::after": { backgroundColor: "$amber9" } },
			crimson: { "&::after": { backgroundColor: "$crimson9" } },
			violet: { "&::after": { backgroundColor: "$violet9" } },
			orange: { "&::after": { backgroundColor: "$orange9" } },
			green: { "&::after": { backgroundColor: "$green9" } },
		},
	},
});

type OptionsProps = {
	id: string;
	label: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
	value: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
};

export const RadioGroup: VFC<{ options: OptionsProps[] }> = (props) => {
	return (
		<RadioGroupPrimitive.Root defaultValue="blue" aria-label="View density">
			<Flex items="center">
				{props?.options.map((item) => {
					return (
						<Flex key={item.id} items="center" gap={0.75}>
							<RadioGroupRadio id={item.id} value={item.value} color={item.value}>
								<RadioGroupIndicator color={item.value} />
							</RadioGroupRadio>
							<Label htmlFor={item.id}>{item.label}</Label>
						</Flex>
					);
				})}
			</Flex>
		</RadioGroupPrimitive.Root>
	);
};
