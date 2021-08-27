import { useTheme } from "next-themes";
import type { VFC } from "react";
import { useEffect, useState } from "react";
import { Switch } from "src/components/shared";

export const ThemeChanger: VFC = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		return setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	const oppositeColor = resolvedTheme === "dark" ? "light" : "dark";

	const handleClick = () => {
		setTheme(oppositeColor);
	};

	return <Switch labalLeft="is light" labalRight="is dark" onClick={handleClick} isDark />;
};
