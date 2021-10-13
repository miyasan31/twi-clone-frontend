import { useRouter } from "next/router";
import { useCallback } from "react";
import { NextLink } from "src/components/shared";
import { styled } from "src/utils";

export const NOTIFICATION_TAB = [
	{ path: "notifications", label: "すべて" },
	{ path: "notifications/mentions", label: "@ツイート" },
];

export const NotificationTab = () => {
	const router = useRouter();

	const pathCheck = useCallback((key: string) => {
		const data = router.pathname.split("/[userId]/")[1];
		return data === undefined && key === "" ? true : data === key;
	}, []);

	return (
		<TabWrap>
			{NOTIFICATION_TAB.map((value) => {
				const path = `/miyasan_0301/${value.path}`;
				return (
					<NextLink key={value.path} href={path} wFull>
						<TabButton>
							<ButtonLabel isActive={pathCheck(value.path)}>
								{value.label}
								<TabActiveBar />
							</ButtonLabel>
						</TabButton>
					</NextLink>
				);
			})}
		</TabWrap>
	);
};

const TabWrap = styled("div", {
	display: "flex",
	width: "100%",
});

const TabButton = styled("div", {
	flexGrow: 1,
	paddingY: "1rem",
	color: "$slate10",
	textAlign: "center",
	cursor: "pointer",

	backgroundColor: "$slate2",
	"&:hover": { backgroundColor: "$slate5" },
});

const TabActiveBar = styled("span", {
	position: "absolute",
	zIndex: 10,
	bottom: -19,
	left: 0,
	right: 0,
	marginX: "auto",
	height: "4px",
	borderRadius: 999,
});

const ButtonLabel = styled("span", {
	position: "relative",
	variants: {
		isActive: {
			true: {
				fontWeight: 700,
				color: "$slate12",
				[`& ${TabActiveBar}`]: {
					backgroundColor: "$primary9",
				},
			},
		},
	},
});
