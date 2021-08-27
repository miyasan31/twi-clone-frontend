/* eslint-disable no-undef */
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import type { VFC } from "react";
import { useEffect } from "react";
import { dark } from "src/utils/theme";

type AppPage = (props: AppProps) => JSX.Element;

const InitTheme: VFC<{ children: JSX.Element }> = (props) => {
	const { resolvedTheme } = useTheme();
	useEffect(() => {
		const html = document.getElementsByTagName("html")[0];
		html.setAttribute("class", resolvedTheme ?? "");
	}, [resolvedTheme]);

	return props.children;
};

export const WithTheme = (Component: AppPage) => {
	const withTheme = (props: AppProps) => {
		return (
			<ThemeProvider attribute="class" value={{ light: "light", dark: dark }}>
				<InitTheme>
					<Component {...props} />
				</InitTheme>
			</ThemeProvider>
		);
	};

	return withTheme;
};
