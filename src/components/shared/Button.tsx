import { styled } from "src/utils";

export const Button = styled("button", {
	all: "unset",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "0.25rem",
	borderRadius: 99999,
	fontWeight: 500,
	cursor: "pointer",

	variants: {
		under: {
			true: { "&:hover": { textDecoration: "underline" } },
		},

		size: {
			base: { fontSize: "0.9rem", height: "2rem", paddingX: "1rem" },
			lg: { fontSize: "1rem", height: "2.5rem", paddingX: "1.75rem" },
			xl: {
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
				color: "white",
				backgroundColor: "$blue9",
				"&:hover": { backgroundColor: "$blue11" },
			},
			blueWhite: {
				color: "$blue9",
				border: "1px solid $blue9",
				boxSizing: "border-box",
				"&:hover": { backgroundColor: "$blue4" },
			},
			blueGhost: {
				color: "$blue9",
				"&:hover": { backgroundColor: "$blue4" },
			},
			red: {
				color: "white",
				backgroundColor: "$red9",
				"&:hover": { backgroundColor: "$red11" },
			},
			slate: {
				color: "white",
				backgroundColor: "$slate9",
				"&:hover": { backgroundColor: "$slate11" },
			},
			slateWhite: {
				color: "$slate12",
				border: "1px solid $slate9",
				boxSizing: "border-box",
				"&:hover": { backgroundColor: "$slate4" },
			},
			amber: {
				color: "white",
				backgroundColor: "$amber9",
				"&:hover": { backgroundColor: "$amber11" },
			},
			crimson: {
				color: "white",
				backgroundColor: "$crimson9",
				"&:hover": { backgroundColor: "$crimson11" },
			},
			violet: {
				color: "white",
				backgroundColor: "$violet9",
				"&:hover": { backgroundColor: "$violet11" },
			},
			orange: {
				color: "white",
				backgroundColor: "$orange9",
				"&:hover": { backgroundColor: "$orange11" },
			},
			green: {
				color: "white",
				backgroundColor: "$green9",
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
