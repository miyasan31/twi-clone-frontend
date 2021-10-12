import { useRouter } from "next/router";
import type { VFC } from "react";
import { useCallback } from "react";
import { AllowLeftIcon } from "src/components/shared";
import { ALLOW_ICON_SIZE } from "src/constants/icon";
import { styled } from "src/utils";

type Props = {
	title?: string | string[];
	subtitle?: string;
	isBrowserBack?: true;
};

export const TopContentTitle: VFC<Props> = (props) => {
	const router = useRouter();

	const handleClickBack = useCallback(() => {
		router.back();
	}, [router]);

	return (
		<TopContentWrap>
			<TopContent>
				{props.isBrowserBack ? (
					<BackButton onClick={handleClickBack}>
						<AllowLeftIcon size={ALLOW_ICON_SIZE} />
					</BackButton>
				) : null}

				<TitleWrap>
					<TitleLabel>{props.title}</TitleLabel>
					<SubtitleLabel>{props.subtitle}</SubtitleLabel>
				</TitleWrap>
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

	display: "flex",
	alignItems: "center",
	gap: "1.5rem",

	paddingY: "0.75rem",
	paddingX: "0.5rem",
	height: "54px",

	borderBottom: "1px solid $slate6",
	backgroundColor: "$slate2",

	width: "100%",
	"@sm": { width: "588px" },
	"@md": { width: "599px" },
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
