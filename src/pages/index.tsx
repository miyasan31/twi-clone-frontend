import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import { HoverUserCard } from "src/components/HoverUserCard";
import { Layout } from "src/components/Layout";
import {
	AllowLeftIcon,
	AllowRightIcon,
	Button,
	CloseIcon,
	CountLabelIconButton,
	Dialog,
	DotsIcon,
	FavoriteIcon,
	IconButton,
	RadioGroup,
	ReplyIcon,
	RetweetIcon,
	ShareIcon,
	Switch,
	Text,
} from "src/components/shared";
// import { useAllTweetsQuery } from "src/graphql/gql";
const HomePage: NextPage = () => {
	// const { loading, error, data } = useAllTweetsQuery();
	// console.info(data);

	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>{error.message}</div>;

	return (
		<Layout>
			<div className="flex h-screen">
				<div className="flex flex-col flex-1 gap-5 justify-center items-center">
					<div className="grid gap-3">
						<Text>ダイアログ</Text>
						<Dialog
							openButtonLabel="dialog"
							title="ツイートを削除しますか？"
							subtitle="削除すると元に戻すことができず、あなたのプロフィール、あなたをフォローしているアカウントのタイムライン、およびTwitterの検索結果から削除されます。"
							closeButtonLabel="キャンセル"
							icon={<MixerHorizontalIcon />}
							confirmationButtonLabel="削除する"
						/>

						<Text>ユーザーカード</Text>
						<HoverUserCard
							userId="miyasan_0301"
							userName="みやさん | 学生"
							profile="みやさんです。hogehogehogehogehogehogehogehogehogehogehogehogehogehoge"
							following={40}
							followers={120}
							iconPath="https://pbs.twimg.com/profile_images/1410567316421578759/3rtKrTAL_400x400.jpg"
						/>

						<Text>アイコン</Text>
						<div className="flex gap-2">
							<CountLabelIconButton color="blue" count={10}>
								<ReplyIcon size={15} />
							</CountLabelIconButton>
							<CountLabelIconButton color="green" count={10}>
								<RetweetIcon size={15} />
							</CountLabelIconButton>
							<CountLabelIconButton color="amber" count={10}>
								<FavoriteIcon size={15} />
							</CountLabelIconButton>
							<IconButton color="blue">
								<ShareIcon size={15} />
							</IconButton>

							<IconButton color="blue">
								<DotsIcon size={15} />
							</IconButton>
							<IconButton color="amber">
								<DotsIcon size={15} />
							</IconButton>
							<IconButton color="crimson">
								<DotsIcon size={15} />
							</IconButton>
							<IconButton color="violet">
								<DotsIcon size={15} />
							</IconButton>
							<IconButton color="orange">
								<DotsIcon size={15} />
							</IconButton>
							<IconButton color="green">
								<DotsIcon size={15} />
							</IconButton>
						</div>

						<Text>デフォルトテーマ</Text>
						<div className="flex gap-2">
							<Button color="blue">Blue</Button>
							<Button color="blueWhite">BlueWhite</Button>
							<Button color="blueGhost">BlueGhost</Button>
							<Button color="red">Red</Button>
							<Button color="gray">Gray</Button>
							<Button color="grayWhite">Gray</Button>
						</div>

						<Text>アイコン付き</Text>
						<div className="flex gap-2">
							<Button color="blue">
								<AllowLeftIcon size={15} />
								Back
							</Button>
							<Button color="blueWhite">
								Next
								<AllowRightIcon size={15} />
							</Button>
							<Button color="red">
								<CloseIcon size={15} />
								Close
							</Button>
						</div>

						<Text>カスタムテーマ</Text>
						<div className="flex gap-4">
							<Button color="amber" size="base">
								Amber
							</Button>
							<Button color="crimson" size="base">
								Crimson
							</Button>
							<Button color="violet" size="md">
								Violet
							</Button>
							<Button color="orange" size="md">
								Orange
							</Button>
						</div>
						<Button color="green" size="lg">
							Green
						</Button>

						<Text>レスポンシブテーマ</Text>
						<div className="flex gap-4">
							<Button
								color="responsive"
								size="md"
								// インラインでレスポンシブ定義するな
								// インラインでやるなら"@initial"を定義しないといけない
								// color={{
								// 	"@initial": "green",
								// 	"@md": "red",
								// 	"@lg": "violet",
								// 	"@xl": "blue",
								// }}
							>
								Responsive
							</Button>
							<Button
								color="blue"
								size="responsive"
								// size={{
								// 	"@initial": "base",
								// 	"@md": "md",
								// 	"@lg": "lg",
								// }}
							>
								Responsive
							</Button>
						</div>

						<Text>ラジオボタン</Text>
						<RadioGroup options={RADIO_OPTIONOS} />

						<Text>トグルボタン</Text>
						<Switch />
					</div>
				</div>
				<div className="flex-1 border-l-2"></div>
			</div>
		</Layout>
	);
};

type OptionsProps = {
	id: string;
	label: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
	value: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
};

const RADIO_OPTIONOS: OptionsProps[] = [
	{ id: "1", label: "blue", value: "blue" },
	{ id: "2", label: "amber", value: "amber" },
	{ id: "3", label: "crimson", value: "crimson" },
	{ id: "4", label: "violet", value: "violet" },
	{ id: "5", label: "orange", value: "orange" },
	{ id: "6", label: "green", value: "green" },
];

// eslint-disable-next-line import/no-default-export
export default HomePage;
