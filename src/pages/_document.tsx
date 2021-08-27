/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-default-export */
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { getCssString } from "src/utils";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
