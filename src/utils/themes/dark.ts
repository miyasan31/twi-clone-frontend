import {
	amberDark,
	blueDark,
	crimsonDark,
	grayDark,
	grayDarkA,
	greenDark,
	orangeDark,
	redDark,
	slateDark,
	slateDarkA,
	violetDark,
	yellowDark,
} from "@radix-ui/colors";

import { theme } from "../stitches.config";

/**
 * @package
 */
export const dark = theme("dark", {
	colors: {
		...amberDark,
		...blueDark,
		...crimsonDark,
		...grayDark,
		...grayDarkA,
		...greenDark,
		...slateDark,
		...slateDarkA,
		...orangeDark,
		...redDark,
		...violetDark,
		...yellowDark,
	},
});
