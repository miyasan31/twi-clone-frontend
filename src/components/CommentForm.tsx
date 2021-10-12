import type { VFC } from "react";
import { useCallback, useState } from "react";
import { TweetForm } from "src/components/TweetForm";
import { styled } from "src/utils";

type Props = {
	userId: string;
};

export const CommentForm: VFC<Props> = (props) => {
	const [isEdit, setIsEdit] = useState(false);

	const handleIsEdit = useCallback(() => {
		setIsEdit(true);
	}, []);

	return (
		// eslint-disable-next-line react/jsx-handler-names
		<TweetForm type="comment" isEdit={isEdit} handleIsEdit={handleIsEdit} userId={props.userId}>
			{isEdit ? (
				<SentUserIdWrap>
					返信先{":"}
					<SentUserId>
						{"@"}
						{props.userId}
					</SentUserId>
					さん
				</SentUserIdWrap>
			) : null}
		</TweetForm>
	);
};

const SentUserIdWrap = styled("div", {
	paddingLeft: "3.75rem",
	color: "$slate11",
});

const SentUserId = styled("span", {
	paddingX: "0.1rem",
	color: "$primary9",
});
