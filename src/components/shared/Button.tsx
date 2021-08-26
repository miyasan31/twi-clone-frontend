import { styled } from "src/utils";

export const Button = styled("button", {
	all: "unset",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "0.25rem",
	borderRadius: 99999,
	fontWeight: 500,
	boxShadow: "$sm",
	cursor: "pointer",

	variants: {
		size: {
			base: { fontSize: "0.9rem", height: "2rem", paddingX: "1rem" },
			md: { fontSize: "1rem", height: "2.5rem", paddingX: "1.75rem" },
			lg: {
				fontSize: "1.1rem",
				height: "3.25rem",
				paddingX: "5rem",
			},
			// ここでレスポンシブ定義する
			// ここでやるなら"@initial"は定義せずに普通に書くだけ
			responsive: {
				fontSize: "0.9rem",
				height: "2rem",
				paddingX: "1rem",
				"@md": { fontSize: "1rem", height: "2.5rem", paddingX: "1.75rem" },
				"@xl": { fontSize: "1.1rem", height: "3.25rem", paddingX: "5rem" },
			},
		},

		color: {
			blue: {
				backgroundColor: "$blue9",
				color: "white",
				"&:hover": { backgroundColor: "$blue11" },
			},
			blueWhite: {
				backgroundColor: "white",
				color: "$blue9",
				border: "1px solid $blue9",
				boxSizing: "border-box",
				"&:hover": { backgroundColor: "$blue4" },
			},
			blueGhost: {
				backgroundColor: "white",
				color: "$blue9",
				boxShadow: "none",
				"&:hover": { backgroundColor: "$blue4" },
			},
			red: {
				backgroundColor: "$red9",
				color: "white",
				"&:hover": { backgroundColor: "$red11" },
			},
			gray: {
				backgroundColor: "$gray9",
				color: "white",
				"&:hover": { backgroundColor: "$gray11" },
			},
			grayWhite: {
				backgroundColor: "white",
				color: "$gray9",
				border: "1px solid $gray9",
				boxSizing: "border-box",
				"&:hover": { backgroundColor: "$gray4" },
			},
			amber: {
				backgroundColor: "$amber9",
				color: "white",
				"&:hover": { backgroundColor: "$amber11" },
			},
			crimson: {
				backgroundColor: "$crimson9",
				color: "white",
				"&:hover": { backgroundColor: "$crimson11" },
			},
			violet: {
				backgroundColor: "$violet9",
				color: "white",
				"&:hover": { backgroundColor: "$violet11" },
			},
			orange: {
				backgroundColor: "$orange9",
				color: "white",
				"&:hover": { backgroundColor: "$orange11" },
			},
			green: {
				backgroundColor: "$green9",
				color: "white",
				"&:hover": { backgroundColor: "$green11" },
			},
			// ここでレスポンシブ定義する
			responsive: {
				backgroundColor: "$amber9",
				color: "white",
				"&:hover": { backgroundColor: "$amber11" },

				"@md": {
					backgroundColor: "$orange9",
					color: "white",
					"&:hover": { backgroundColor: "$orange11" },
				},
				"@xl": {
					backgroundColor: "$violet9",
					color: "white",
					"&:hover": { backgroundColor: "$violet11" },
				},
			},
		},
	},

	defaultVariants: {
		size: "base",
	},
});
