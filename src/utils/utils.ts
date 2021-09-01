/* eslint-disable arrow-body-style */
import type { PropertyValue } from "@stitches/react";

// const isPhoneNumber = (value: string): boolean => {
// 	return /^\d[0-9]{0,2}rem$/.test(value);
// };

/**
 * @package
 */
export const utils = {
	// Abbreviated margin properties
	marginY: (value: PropertyValue<"margin">) => ({
		marginTop: value,
		marginBottom: value,
	}),
	marginX: (value: PropertyValue<"margin">) => ({
		marginLeft: value,
		marginRight: value,
	}),
	paddingY: (value: PropertyValue<"padding">) => ({
		paddingTop: value,
		paddingBottom: value,
	}),
	paddingX: (value: PropertyValue<"padding">) => ({
		paddingLeft: value,
		paddingRight: value,
	}),

	// A property for applying width/height together
	square: (value: PropertyValue<"width" | "height">) => ({
		width: value,
		height: value,
	}),
};

// declare const phoneNominality: unique symbol;
// type PhoneNumber = string & { [phoneNominality]: never };
