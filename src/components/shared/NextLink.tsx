import Link from "next/link";
import type { ReactNode, VFC } from "react";
import { styled } from "src/utils";

type Props = {
	children: ReactNode;
	display?: "inline" | "block" | "inlineBlock" | "inlineFlex";
	href: string;
	btn?: true;
	under?: true;
	wFull?: true;
};

export const NextLink: VFC<Props> = (props) => {
	return (
		<Link href={props.href} passHref>
			<Anker display={props.display} btn={props.btn} under={props.under} wFull={props.wFull}>
				{props.children}
			</Anker>
		</Link>
	);
};

export const Anker = styled("a", {
	display: "block",
	cursor: "pointer",

	variants: {
		display: {
			inline: {
				display: "inline",
			},
			block: {
				display: "block",
			},
			inlineBlock: {
				display: "inline-block",
			},
			inlineFlex: {
				display: "inline-flex",
			},
		},

		under: {
			true: { "&:hover": { textDecoration: "underline" } },
		},

		wFull: {
			true: { width: "100%" },
		},

		btn: {
			true: {
				all: "unset",
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "0.25rem",
				borderRadius: 99999,
				fontWeight: 500,
			},
		},
	},

	defaultVariants: {
		display: "inline",
	},
});
