import Link from "next/link";
import type { ReactNode, VFC } from "react";
import { styled } from "src/utils";

export const Anker = styled("a", {
	"&:hover": { textDecoration: "underline" },
});

type Props = {
	children: ReactNode;
	href: string;
};

export const NextLink: VFC<Props> = (props) => {
	return (
		<Link href={props.href} passHref>
			<Anker>{props.children}</Anker>
		</Link>
	);
};
