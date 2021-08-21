import "src/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { client } from "src/graphql/apollo-client";

const MyApp: NextPage<AppProps> = (props) => {
	return (
		<ApolloProvider client={client}>
			<props.Component {...props.pageProps} />
		</ApolloProvider>
	);
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
