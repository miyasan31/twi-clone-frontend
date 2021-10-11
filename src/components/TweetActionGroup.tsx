import { Lottie } from "@crello/react-lottie";
import type { MouseEvent, VFC } from "react";
import { useCallback, useState } from "react";
import animationData from "src/assets/19898-star.json";
import { CountLabelIconButton, FavoriteIcon, ReplyIcon, RetweetIcon, ShareIcon } from "src/components/shared";
import { styled } from "src/utils";

const ICON_SIZE = 18;

type Props = {
	retweetCount?: string;
	likeCount?: string;
	commentCount?: string;
	detail?: true;
};

const animationConfig = {
	animationData: animationData,
	loop: false,
	autoplay: true,
};

export const TweetActionGroup: VFC<Props> = (props) => {
	const [isLiked, setIsLiked] = useState(false);

	const handleClickDisabled = useCallback((e: MouseEvent) => {
		e.preventDefault();
	}, []);

	const handleClickLike = useCallback((e: MouseEvent) => {
		e.preventDefault();
		setIsLiked((prev) => !prev);
	}, []);

	return (
		<IconGroupWrap detail={props.detail}>
			<CountLabelIconButton color="blue" count={props.commentCount} onClick={(e) => handleClickDisabled(e)}>
				<ReplyIcon size={ICON_SIZE} />
			</CountLabelIconButton>

			<CountLabelIconButton color="green" count={props.retweetCount} onClick={(e) => handleClickDisabled(e)}>
				<RetweetIcon size={ICON_SIZE} />
			</CountLabelIconButton>

			<CountLabelIconButton color="yellow" count={props.likeCount} onClick={(e) => handleClickLike(e)}>
				{isLiked ? (
					<Lottie config={animationConfig} speed={1} width="32px" height="32px" />
				) : (
					<FavoriteIcon size={ICON_SIZE} />
				)}
			</CountLabelIconButton>

			<CountLabelIconButton color="blue" count="" onClick={(e) => handleClickDisabled(e)}>
				<ShareIcon size={ICON_SIZE} />
			</CountLabelIconButton>
		</IconGroupWrap>
	);
};

const IconGroupWrap = styled("div", {
	display: "flex",
	justifyContent: "space-between",

	paddingY: "0.25rem",
	"@sm": { width: "430px" },

	variants: {
		detail: {
			true: {
				justifyContent: "space-around",
				width: "100%",
			},
		},
	},
});
