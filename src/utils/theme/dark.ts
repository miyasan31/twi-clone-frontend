import {
	amberDark,
	blueDark,
	crimsonDark,
	greenDark,
	orangeDark,
	redDark,
	slateDark,
	slateDarkA,
	violetDark,
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
		...slateDark,
		...slateDarkA,
		...greenDark,
		...orangeDark,
		...redDark,
		...violetDark,
	},
});
