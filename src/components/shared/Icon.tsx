import {
	ArrowLeftIcon as ArrowLeft,
	ArrowRightIcon as ArrowRight,
	BellIcon as Bell,
	ChatBubbleIcon as ChatBubble,
	Cross1Icon as Cross,
	DotsHorizontalIcon as DotsHorizontal,
	DotsVerticalIcon as DotsVertical,
	HomeIcon as Home,
	LoopIcon as Loop,
	MagicWandIcon as MagicWand,
	Pencil1Icon as Pencil,
	PersonIcon as Person,
	Share1Icon as Share,
	StarIcon as Star,
	TwitterLogoIcon as Twitter,
} from "@radix-ui/react-icons";
import { styled } from "src/utils";

const BUTTON_ICON_SIZE = 15;
const ACTION_ICON_SIZE = 18;
const ALLOW_ICON_SIZE = 20;
const NAVIGATION_ICON_SIZE = 30;

export const TwitterIcon = styled(Twitter, {
	square: NAVIGATION_ICON_SIZE,
});

export const HomeIcon = styled(Home, {
	square: NAVIGATION_ICON_SIZE,
});

export const BellIcon = styled(Bell, {
	square: NAVIGATION_ICON_SIZE,
});

export const MagicWandIcon = styled(MagicWand, {
	square: NAVIGATION_ICON_SIZE,
});

export const PersonIcon = styled(Person, {
	square: NAVIGATION_ICON_SIZE,
});

export const PencilIcon = styled(Pencil, {
	square: NAVIGATION_ICON_SIZE,
});

// ---

export const ArrowLeftIcon = styled(ArrowLeft, {
	square: ALLOW_ICON_SIZE,
	variants: {
		btn: { true: { square: BUTTON_ICON_SIZE } },
	},
});

export const ArrowRightIcon = styled(ArrowRight, {
	square: ALLOW_ICON_SIZE,
	variants: {
		btn: { true: { square: BUTTON_ICON_SIZE } },
	},
});

export const CrossIcon = styled(Cross, {
	square: ALLOW_ICON_SIZE,
	variants: {
		btn: { true: { square: BUTTON_ICON_SIZE } },
	},
});

// ---

export const CommentIcon = styled(ChatBubble, {
	square: ACTION_ICON_SIZE,
});

export const RetweetIcon = styled(Loop, {
	square: ACTION_ICON_SIZE,
});

export const StarIcon = styled(Star, {
	square: ACTION_ICON_SIZE,
});

export const ShareIcon = styled(Share, {
	square: ACTION_ICON_SIZE,
});

export const DotsVerticalIcon = styled(DotsVertical, {
	square: ACTION_ICON_SIZE,
	variants: {
		btn: { true: { square: BUTTON_ICON_SIZE } },
	},
});

export const DotsHorizontalIcon = styled(DotsHorizontal, {
	square: ACTION_ICON_SIZE,
	variants: {
		btn: { true: { square: BUTTON_ICON_SIZE } },
	},
});
