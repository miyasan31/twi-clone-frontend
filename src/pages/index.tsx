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
	NextLink,
	RadioGroup,
	ReplyIcon,
	RetweetIcon,
	ShareIcon,
	Switch,
	Text,
} from "src/components/shared";
import { ColorChanger, ThemeChanger } from "src/components/theme";
// import { useAllTweetsQuery } from "src/graphql/gql";

const HomePage: NextPage = () => {
	// const { loading, error, data } = useAllTweetsQuery();
	// console.info(data);
	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>{error.message}</div>;

	return (
		<Layout>
			<div className="flex justify-center items-center py-20">
				<div className="grid gap-3">
					<Text>ダークモード変更</Text>
					<ThemeChanger />

					<Text>スイッチ</Text>
					<Switch
						labalLeft="off"
						labalRight="on"
						// eslint-disable-next-line react/jsx-handler-names
						onClick={() => {
							return console.info("aaa");
						}}
					/>

					<Text>テーマ変更</Text>
					<ColorChanger />

					<Text>アイコン</Text>
					<div className="flex gap-2">
						<CountLabelIconButton color="blue" count={10}>
							<ReplyIcon size={15} />
						</CountLabelIconButton>
						<CountLabelIconButton color="green" count={100}>
							<RetweetIcon size={15} />
						</CountLabelIconButton>
						<CountLabelIconButton color="amber" count={1000}>
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
						<NextLink href="/">
							<Button color="blueGhost" under>
								BlueGhost
							</Button>
						</NextLink>
						<Button color="red">Red</Button>
						<Button color="slate">Slate</Button>
						<Button color="slateWhite">Slate</Button>
						<NextLink href="/" btn>
							Link
						</NextLink>
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
						<Button color="amber">Amber</Button>
						<Button color="crimson">Crimson</Button>
						<Button color="violet">Violet</Button>
						<Button color="orange">Orange</Button>
						<Button color="green">Green</Button>
					</div>

					<Text>レスポンシブテーマ</Text>
					<div className="flex gap-4">
						<Button
							color="responsive"
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

					<Text>ユーザーカード</Text>
					<HoverUserCard
						userId="miyasan_0301"
						userName="みやさん | 学生"
						profile="みやさんです。hogehogehogehogehogehogehogehogehogehogehogehogehogehoge"
						following={40}
						followers={120}
						iconPath="https://pbs.twimg.com/profile_images/1410567316421578759/3rtKrTAL_400x400.jpg"
					/>

					<Text>ダイアログ</Text>
					<Dialog
						openButtonLabel="dialog"
						title="ツイートを削除しますか？"
						subtitle="この操作は取り消せません。プロフィール、あなたをフォローしているアカウントのタイムライン、Twitterの検索結果からツイートが削除されます。"
						closeButtonLabel="キャンセル"
						icon={<MixerHorizontalIcon />}
						confirmationButtonLabel="削除する"
					/>

					<Text>フォントサイズ</Text>
					<Text size="xs">xs - TextTextText</Text>
					<Text size="sm">sm - TextTextText</Text>
					<Text size="base">base - TextTextText</Text>
					<Text size="lg">lg - TextTextText</Text>
					<Text size="xl">xl - TextTextText</Text>
					<Text size="x2l">x2l - TextTextText</Text>
					<Text size="x3l">x3l - TextTextText</Text>
					<Text size="x4l">x4l - TextTextText</Text>

					<Text>デコレーション</Text>
					<Text bold>太字太字太字</Text>
					<Text faded>薄字薄字薄字</Text>
					<Text under>下線下線下線</Text>
					<Text color="blue">青字青字青字</Text>
					<Text color="red">赤字赤字赤字</Text>
				</div>
			</div>
		</Layout>
	);
};

type OptionsProps = {
	id: string;
	label: string;
	value: string;
	color: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
};

const RADIO_OPTIONOS: OptionsProps[] = [
	{ id: "1", label: "Blue", value: "Blue", color: "blue" },
	{ id: "2", label: "Amber", value: "Amber", color: "amber" },
	{ id: "3", label: "Crimson", value: "Crimson", color: "crimson" },
	{ id: "4", label: "Violet", value: "Violet", color: "violet" },
	{ id: "5", label: "Orange", value: "Orange", color: "orange" },
	{ id: "6", label: "Green", value: "Green", color: "green" },
];

// eslint-disable-next-line import/no-default-export
export default HomePage;
