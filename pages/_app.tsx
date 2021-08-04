import "styles/globals.css";

import type { AppProps } from "next/app";

const MyApp = (props: AppProps) => {
	return <props.Component {...props.pageProps} />;
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
