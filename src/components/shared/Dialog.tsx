import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import type { ReactNode, VFC } from "react";
import { Button, IconButton } from "src/components/shared";
import { contentShow, overlayShow } from "src/components/shared/animation";
import { Flex } from "src/components/shared/Flex";
import { styled } from "src/utils";

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
	backgroundColor: "$slateA9",
	position: "fixed",
	inset: 0,
	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},
});

const AlertDialogContent = styled(AlertDialogPrimitive.Content, {
	backgroundColor: "white",
	borderRadius: "1rem",
	boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "90vw",
	maxWidth: "350px",
	padding: "1.5rem",
	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
		willChange: "transform",
	},
	"&:focus": { outline: "none" },
});

const AlertDialogTitle = styled(AlertDialogPrimitive.Title, {
	margin: 0,
	color: "$slate12",
	fontSize: "1.25rem",
	fontWeight: "bold",
	lineHeight: "3rem",
});

const AlertDialogDescription = styled(AlertDialogPrimitive.Description, {
	marginBottom: "1.25rem",
	color: "$slate11",
});

type Props = {
	title: string;
	subtitle: string;
	icon?: ReactNode;
	openButtonLabel: string;
	closeButtonLabel: string;
	confirmationButtonLabel: string;
};

export const Dialog: VFC<Props> = (props) => {
	return (
		<AlertDialogPrimitive.Root>
			<StyledOverlay />

			<AlertDialogPrimitive.Trigger as={IconButton} color="blue" shadow>
				{props.icon}
			</AlertDialogPrimitive.Trigger>

			<AlertDialogContent>
				<AlertDialogTitle>{props.title}</AlertDialogTitle>
				<AlertDialogDescription>{props.subtitle}</AlertDialogDescription>

				<Flex direction="col" gap={0.75}>
					<AlertDialogPrimitive.Action as={Button} color="red" size="md">
						{props.confirmationButtonLabel}
					</AlertDialogPrimitive.Action>
					<AlertDialogPrimitive.Cancel as={Button} color="grayWhite" size="md">
						{props.closeButtonLabel}
					</AlertDialogPrimitive.Cancel>
				</Flex>
			</AlertDialogContent>
		</AlertDialogPrimitive.Root>
	);
};
