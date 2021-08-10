import type { FC } from "react";
import { Layout } from "src/components/Layout";

const HomePage: FC = () => {
	return (
		<Layout>
			<div className="flex h-screen">
				<div className="flex-1 bg-red-200"></div>
				<div className="flex-1 bg-green-200"></div>
				<div className="flex-1 bg-blue-200"></div>
			</div>
		</Layout>
	);
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
