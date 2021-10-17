import { Lottie } from "@crello/react-lottie";
import type { MouseEvent, VFC } from "react";
import { useCallback } from "react";
import animationData from "src/assets/19898-star.json";
import { CountLabelIconButton } from "src/components/shared";
import { CommentIcon, RetweetIcon, ShareIcon, StarIcon } from "src/components/shared/Icon";
import { styled } from "src/utils";

type Props = {
	detail?: true;
	isRetweet: boolean;
	isLike: boolean;
	retweetCount?: string;
	likeCount?: string;
	commentCount?: string;
};

const animationConfig = {
	animationData: animationData,
	loop: false,
	autoplay: true,
};

export const TweetActionGroup: VFC<Props> = (props) => {
	const handleClickDisabled = useCallback((e: MouseEvent) => {
		e.preventDefault();
	}, []);

	const handleClickLike = useCallback((e: MouseEvent) => {
		e.preventDefault();
	}, []);

	return (
		<IconGroupWrap detail={props.detail}>
			<CountLabelIconButton color="blue" count={props.commentCount} onClick={(e) => handleClickDisabled(e)}>
				<CommentIcon />
			</CountLabelIconButton>

			<CountLabelIconButton color="green" count={props.retweetCount} onClick={(e) => handleClickDisabled(e)}>
				<RetweetIcon />
			</CountLabelIconButton>

			<CountLabelIconButton color="yellow" count={props.likeCount} onClick={(e) => handleClickLike(e)}>
				{props.isLike ? <Lottie config={animationConfig} speed={1} width="32px" height="32px" /> : <StarIcon />}
			</CountLabelIconButton>

			<CountLabelIconButton color="blue" count="" onClick={(e) => handleClickDisabled(e)}>
				<ShareIcon />
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
