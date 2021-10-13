import { useRouter } from "next/router";
import type { ReactNode, VFC } from "react";
import { useCallback } from "react";
import { ArrowLeftIcon } from "src/components/shared/Icon";
import { styled } from "src/utils";

type Props = {
	children?: ReactNode;
	title?: string | string[];
	subtitle?: string;
	isBrowserBack?: true;
};

export const FixedHeader: VFC<Props> = (props) => {
	const router = useRouter();

	const handleClickBack = useCallback(() => {
		router.back();
	}, [router]);

	return (
		<TopContentWrap>
			<TopContent>
				<TopTitle>
					{props.isBrowserBack ? (
						<BackButton onClick={handleClickBack}>
							<ArrowLeftIcon />
						</BackButton>
					) : null}

					<TitleWrap>
						<TitleLabel>{props.title}</TitleLabel>
						<SubtitleLabel>{props.subtitle}</SubtitleLabel>
					</TitleWrap>
				</TopTitle>

				{props.children}
			</TopContent>
		</TopContentWrap>
	);
};

const TopContentWrap = styled("div", {
	position: "relative",
});

const TopContent = styled("div", {
	position: "fixed",
	top: 0,
	zIndex: 10,

	width: "calc(100% - 70px)",
	"@sm": { width: "588px" },
	"@md": { width: "599px" },

	backgroundColor: "$slate2",
	borderBottom: "1px solid $slate6",
});

const TopTitle = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: "1.5rem",

	height: "54px",
	paddingY: "0.75rem",
	paddingX: "0.5rem",
});

const BackButton = styled("button", {
	padding: "0.5rem",
	borderRadius: 9999,
	"&:hover": {
		backgroundColor: "$slate6",
	},
});

const TitleWrap = styled("div", {});

const TitleLabel = styled("div", {
	paddingLeft: "0.5rem",
	fontSize: "1.2rem",
	fontWeight: 700,
	lineHeight: "1.5rem",
});

const SubtitleLabel = styled("div", {
	paddingLeft: "0.5rem",
	color: "$slate11",
	lineHeight: "1rem",
	fontSize: "0.8rem",
});
