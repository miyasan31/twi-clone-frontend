import { amber, blue, crimson, green, orange, red, slate, slateA, violet } from "@radix-ui/colors";

import { theme } from "../stitches.config";

/**
 * @package
 */
export const lightViolet = theme("light_violet", {
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
		primary1: "$violet1",
		primary2: "$violet2",
		primary3: "$violet3",
		primary4: "$violet4",
		primary5: "$violet5",
		primary6: "$violet6",
		primary7: "$violet7",
		primary8: "$violet8",
		primary9: "$violet9",
		primary10: "$violet10",
		primary11: "$violet11",
		primary12: "$violet12",
	},
});
