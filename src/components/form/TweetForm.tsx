import Image from "next/image";
import type { ReactNode, VFC } from "react";
import { useCallback, useMemo, useState } from "react";
import { Button, NextLink } from "src/components/shared";
import { calcTextAreaHeight } from "src/components/shared/calcTextAreaHeight";
import { ICON_PHOTO_SIZE } from "src/constants/icon";
import { styled } from "src/utils";

type Props = {
	type: "tweet" | "comment";
	userId: string;
	isEdit: boolean;
	handleIsEdit?: () => void;
	children?: ReactNode;
};

export const TweetForm: VFC<Props> = (props) => {
	const [state, setState] = useState("");

	const href = useMemo(() => {
		return `/${props.userId}`;
	}, [props.userId]);

	const handleChange = useCallback((value: string) => {
		setState(() => value);
	}, []);

	const handleSubmit = useCallback(() => {
		console.info("aaaaaaa");
	}, []);

	const label = useMemo(() => {
		return props.type === "tweet" ? ["ツイートする", "いまどうしてる？"] : ["返信", "返信をツイート"];
	}, []);

	return (
		<Wrap>
			{props.children}

			<TweetFromWrap>
				<IconPhotoWrap>
					<NextLink href={href}>
						<Image
							src="/oden.jpg"
							alt="Picture of the author"
							className="rounded-full"
							width={ICON_PHOTO_SIZE}
							height={ICON_PHOTO_SIZE}
						/>
					</NextLink>
				</IconPhotoWrap>

				<FromWrap isCol={props.isEdit}>
					<Tweetinput
						name="tweetBody"
						placeholder={label[1]}
						value={state}
						rows={calcTextAreaHeight(state)}
						onChange={(e) => handleChange(e.target.value)}
						onClick={props.handleIsEdit}
					/>
					<ButtonWrap>
						<Button type="submit" color="primary" onClick={handleSubmit} disabled={state === ""}>
							{label[0]}
						</Button>
					</ButtonWrap>
				</FromWrap>
			</TweetFromWrap>
		</Wrap>
	);
};

const Wrap = styled("div", {
	paddingTop: "0.75rem",
});

const TweetFromWrap = styled("div", {
	display: "flex",
	gap: "0.5rem",
	width: "100%",
});

const IconPhotoWrap = styled("div", {
	minWidth: "fit-content",
});

const FromWrap = styled("div", {
	display: "flex",
	paddingLeft: "0.25rem",
	width: "100%",

	variants: {
		isCol: { true: { flexDirection: "column" } },
	},
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
	minWidth: "fit-content",
	paddingY: "0.75rem",
});
