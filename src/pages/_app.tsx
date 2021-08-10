import "src/styles/globals.css";

import type { AppProps } from "next/app";
import type { FC } from "react";

const MyApp: FC<AppProps> = (props) => {
	return <props.Component {...props.pageProps} />;
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
