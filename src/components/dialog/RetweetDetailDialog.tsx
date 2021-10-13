import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import type { ReactNode, VFC } from "react";
import { ProfileCard } from "src/components/card/ProfileCard";
import { NextLink, Text } from "src/components/shared";
import { contentShow, overlayShow } from "src/components/shared/animation";
import { CrossIcon } from "src/components/shared/Icon";
import { useGetTweetRetweetsQuery } from "src/graphql/gql";
import { styled } from "src/utils";

type Props = {
	children: ReactNode;
	tweetId: number;
};

export const RetweetDetailDialog: VFC<Props> = (props) => {
	const { data, loading, error } = useGetTweetRetweetsQuery({
		variables: { tweetId: Number(props.tweetId) },
	});

	if (loading) {
		<div>ローティング中</div>;
	}
	if (error) {
		<div>エラーが発生</div>;
	}

	return (
		<AlertDialogPrimitive.Root>
			<StyledOverlay />

			<AlertDialogPrimitive.Trigger>{props.children}</AlertDialogPrimitive.Trigger>

			<AlertDialogContent>
				<TopContent>
					<AlertDialogPrimitive.Cancel asChild>
						<CloseButton>
							<CrossIcon />
						</CloseButton>
					</AlertDialogPrimitive.Cancel>

					<AlertDialogPrimitive.Title asChild>
						<Text bold size="xl">
							リツイートしたユーザー
						</Text>
					</AlertDialogPrimitive.Title>
				</TopContent>

				<AlertDialogDescription>
					{data
						? data.tweet.retweets.map((retweet) => (
								<NextLink key={retweet.id} href={`/${retweet.userId}`}>
									<ProfileCard {...retweet} />
								</NextLink>
						  ))
						: null}
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialogPrimitive.Root>
	);
};

const AlertDialogDescription = styled(AlertDialogPrimitive.Description, {
	height: "70vh",
	overflowY: "auto",
});

const TopContent = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: "1.5em",
	height: "54px",
	paddingY: "0.75rem",
	paddingX: "0.5rem",
	borderBottom: "1px solid $slate6",
});

const CloseButton = styled("button", {
	padding: "0.5rem",
	borderRadius: 9999,
	"&:hover": {
		backgroundColor: "$slate6",
	},
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
	position: "fixed",
	inset: 0,

	backgroundColor: "$slateA11",

	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},
});

const AlertDialogContent = styled(AlertDialogPrimitive.Content, {
	position: "fixed",
	top: "50%",
	left: "50%",

	width: "85vw",
	maxWidth: "600px",

	backgroundColor: "$slate2",
	borderRadius: "1rem",
	boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",

	transform: "translate(-50%, -50%)",

	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
		willChange: "transform",
	},

	"&:focus": { outline: "none" },
});
