import type { ReactNode, VFC } from "react";
import { useMemo } from "react";
import { styled } from "src/utils";

type Props = {
	direction?: "rowR" | "col" | "colR";
	justify?: "start" | "center" | "end" | "between" | "evenly";
	items?: "center";
	gap?: number;
	children: ReactNode;
};

export const Flex: VFC<Props> = (props) => {
	const gap: string = useMemo(() => props.gap + "rem", [props]);

	return (
		<StitchesFlex direction={props.direction} justify={props.justify} items={props.items} css={{ gap }}>
			{props.children}
		</StitchesFlex>
	);
};

const StitchesFlex = styled("div", {
	display: "flex",

	variants: {
		direction: {
			col: {
				flexDirection: "column",
			},
			rowR: {
				flexDirection: "row-reverse",
			},
			colR: {
				flexDirection: "column-reverse",
			},
		},

		justify: {
			start: {
				justifyContent: "start",
			},
			center: {
				justifyContent: "center",
			},
			end: {
				justifyContent: "end",
			},
			between: {
				justifyContent: "space-between",
			},
			evenly: {
				justifyContent: "space-evenly",
			},
		},

		items: {
			center: {
				alignItems: "center",
			},
		},
	},
});
