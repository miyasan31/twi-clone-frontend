import { useTheme } from "next-themes";
import type { ChangeEvent, VFC } from "react";
import { useEffect, useState } from "react";
import { RadioGroup } from "src/components/shared";

export const ColorChanger: VFC = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);
	const [currentColor, setCurrentColor] = useState("");

	const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === undefined) return;
		if (resolvedTheme?.indexOf("light") === 0) {
			const customColor = "light_" + e.target.value;
			setTheme(customColor);
		} else {
			const customColor = "dark_" + e.target.value;
			setTheme(customColor);
		}
	};

	useEffect(() => {
		resolvedTheme && setCurrentColor(resolvedTheme.split("_")[1]);
		return setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<>
			<RadioGroup
				options={RADIO_OPTIONOS1}
				defaultValue={currentColor}
				ariaLabel="colorChanger"
				onClick={handleClick}
			/>
			<RadioGroup options={RADIO_OPTIONO2} defaultValue={currentColor} ariaLabel="colorChanger" onClick={handleClick} />
		</>
	);
};

type OptionsProps = {
	id: string;
	label: string;
	value: string;
	color: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
};

const RADIO_OPTIONOS1: OptionsProps[] = [
	{ id: "1", label: "blue", value: "blue", color: "blue" },
	{ id: "2", label: "amber", value: "amber", color: "amber" },
	{ id: "3", label: "crimson", value: "crimson", color: "crimson" },
];

const RADIO_OPTIONO2: OptionsProps[] = [
	{ id: "4", label: "violet", value: "violet", color: "violet" },
	{ id: "5", label: "orange", value: "orange", color: "orange" },
	{ id: "6", label: "green", value: "green", color: "green" },
];
