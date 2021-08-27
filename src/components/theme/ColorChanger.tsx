import type { VFC } from "react";
import { useCallback } from "react";
import { RadioGroup } from "src/components/shared";

export const ColorChanger: VFC = () => {
	const handleClick = useCallback((e) => {
		localStorage.setItem("color", e.target.value);
	}, []);

	return <RadioGroup options={RADIO_OPTIONOS} onClick={handleClick} />;
};

type OptionsProps = {
	id: string;
	label: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
	value: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
};

const RADIO_OPTIONOS: OptionsProps[] = [
	{ id: "1", label: "blue", value: "blue" },
	{ id: "2", label: "amber", value: "amber" },
	{ id: "3", label: "crimson", value: "crimson" },
	{ id: "4", label: "violet", value: "violet" },
	{ id: "5", label: "orange", value: "orange" },
	{ id: "6", label: "green", value: "green" },
];
