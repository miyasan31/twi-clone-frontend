import type { VFC } from "react";
import { CountLabelIconButton, FavoriteIcon, ReplyIcon, RetweetIcon, ShareIcon } from "src/components/shared";
import { styled } from "src/utils";

const ICON_SIZE = 18;

type Props = {
	retweetCount: string;
	likeCount: string;
	commentCount: string;
};

export const IconGroup: VFC<Props> = (props) => {
	return (
		<IconGroupWrap>
			<CountLabelIconButton color="primary" count={props.commentCount}>
				<ReplyIcon size={ICON_SIZE} />
			</CountLabelIconButton>
			<CountLabelIconButton color="green" count={props.retweetCount}>
				<RetweetIcon size={ICON_SIZE} />
			</CountLabelIconButton>
			<CountLabelIconButton color="amber" count={props.likeCount}>
				<FavoriteIcon size={ICON_SIZE} />
			</CountLabelIconButton>
			<CountLabelIconButton color="primary" count="">
				<ShareIcon size={ICON_SIZE} />
			</CountLabelIconButton>
		</IconGroupWrap>
	);
};

const IconGroupWrap = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	paddingY: "0.25rem",
	"@sm": {
		width: "430px",
	},
});
