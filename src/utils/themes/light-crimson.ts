import { amber, blue, crimson, green, orange, red, slate, slateA, violet } from "@radix-ui/colors";

import { theme } from "../stitches.config";

/**
 * @package
 */
export const lightCrimson = theme("light_crimson", {
	colors: {
		...amber,
		...blue,
		...crimson,
		...green,
		...orange,
		...red,
		...slate,
		...slateA,
		...violet,
		primary1: "$crimson1",
		primary2: "$crimson2",
		primary3: "$crimson3",
		primary4: "$crimson4",
		primary5: "$crimson5",
		primary6: "$crimson6",
		primary7: "$crimson7",
		primary8: "$crimson8",
		primary9: "$crimson9",
		primary10: "$crimson10",
		primary11: "$crimson11",
		primary12: "$crimson12",
	},
});
