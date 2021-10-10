import Image from "next/image";
import type { VFC } from "react";
import { useCallback, useMemo, useState } from "react";
import { NextLink } from "src/components/shared";
import { Button } from "src/components/shared/Button";
import { ICON_PHOTO_SIZE } from "src/constants/icon";
import { styled } from "src/utils";

const handleClick = () => {
	console.info("aaaa");
};

const calcTextAreaHeight = (value: string) => {
	const rowsNum = value.split("\n").length;
	return rowsNum;
};

type Props = {
	userId: string;
};

export const TweetFrom: VFC<Props> = (props) => {
	const [state, setState] = useState("");

	const href = useMemo(() => {
		return `/${props.userId}`;
	}, [props.userId]);

	const handleChange = useCallback((value: string) => {
		setState(() => value);
	}, []);

	return (
		<TweetFromWrap>
			<IconPhotoWrap>
				<NextLink href={href}>
					<Image
						src="/myicon.jpg"
						alt="Picture of the author"
						className="rounded-full"
						width={ICON_PHOTO_SIZE}
						height={ICON_PHOTO_SIZE}
					/>
				</NextLink>
			</IconPhotoWrap>

			<FromWrap>
				<Tweetinput
					value={state}
					rows={calcTextAreaHeight(state)}
					onChange={(e) => handleChange(e.target.value)}
					name="tweetBody"
					placeholder="いまどうしてる？"
				/>

				<ButtonWrap>
					<Button type="submit" color="primary" onClick={handleClick} disabled={state === ""}>
						ツイートする
					</Button>
				</ButtonWrap>
			</FromWrap>
		</TweetFromWrap>
	);
};

const TweetFromWrap = styled("div", {
	display: "flex",
	gap: "0.5rem",
	paddingTop: "0.75rem",
	paddingX: "1rem",
	width: "100%",
	borderBottom: "1px solid $slate6",
});

const IconPhotoWrap = styled("div", {
	minWidth: "fit-content",
});

const FromWrap = styled("div", {
	display: "flex",
	flexDirection: "column",
	paddingLeft: "0.25rem",
	width: "100%",
});

const Tweetinput = styled("textarea", {
	width: "100%",
	fontSize: "1.25rem",
	backgroundColor: "$slate2",
	resize: "none",
	paddingY: "0.5rem",
	outline: "none",
	borderBottom: "1px solid $slate2",

	"&:focus": {
		borderBottomColor: "$slate6",
	},
});

const ButtonWrap = styled("div", {
	display: "flex",
	justifyContent: "end",
	paddingY: "0.75rem",
});
