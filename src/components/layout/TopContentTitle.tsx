import { useRouter } from "next/router";
import type { VFC } from "react";
import { useCallback } from "react";
import { AllowLeftIcon } from "src/components/shared";
import { ALLOW_ICON_SIZE } from "src/constants/icon";
import { styled } from "src/utils";

type Props = {
	title: string;
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

				<TitleLabel>{props.title}</TitleLabel>
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

const TitleLabel = styled("div", {
	paddingLeft: "0.5rem",
	fontSize: "1.25rem",
	fontWeight: 700,
});
