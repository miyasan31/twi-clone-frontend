import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import Image from "next/image";
import { HoverUserCard } from "src/components/HoverUserCard";
import { MainBody } from "src/components/layout/MainBody";
import { TopContentTitle } from "src/components/layout/TopContentTitle";
import { ProfileDetailCard } from "src/components/ProfileDetailCard";
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
import { TweetCard } from "src/components/TweetCard";
import { TweetDetailCard } from "src/components/TweetDetailCard";
import { TweetForm } from "src/components/TweetForm";
import { BUTTON_ICON_SIZE, ICON_PHOTO_SIZE } from "src/constants/icon";
import { TWEET_DATA } from "src/constants/tweet";
import { styled } from "src/utils";

const handleClick = () => {
	console.info("click!!");
};

const IndexPage: NextPage = () => {
	return (
		<MainBody>
			<TopContentTitle title="コンポーネント集" isBrowserBack />

			<ProfileDetailCard />
			<TweetCard {...TWEET_DATA} />

			<TweetDetailCardWrap>
				<TweetForm type="tweet" userId={"miyahara"} isEdit />
			</TweetDetailCardWrap>

			<TweetDetailCard {...TWEET_DATA} />

			<div className="flex justify-center items-center pt-5 pb-20">
				<div className="grid gap-3">
					<Text>ダークモード変更</Text>
					<ThemeChanger />

					<Text>テーマ変更</Text>
					<ColorChanger />

					<Text>アイコン</Text>
					<div className="flex gap-10">
						<CountLabelIconButton color="primary" count={"1"}>
							<ReplyIcon size={18} />
						</CountLabelIconButton>
						<CountLabelIconButton color="green" count={"2"}>
							<RetweetIcon size={18} />
						</CountLabelIconButton>
						<CountLabelIconButton color="amber" count={"9"}>
							<FavoriteIcon size={18} />
						</CountLabelIconButton>

						<IconButton color="primary">
							<ShareIcon size={18} />
						</IconButton>
						<IconButton color="primary">
							<DotsIcon size={18} />
						</IconButton>
					</div>

					<Text>ボタン</Text>
					<div className="flex gap-2">
						<Button color="primary" onClick={handleClick}>
							追加
						</Button>
						<Button color="primary" isOutline onClick={handleClick}>
							削除
						</Button>
						<Button color="primary" isGhost onClick={handleClick}>
							BlueGhost
						</Button>
					</div>
					<div className="flex gap-3">
						<Button color="red" onClick={handleClick}>
							Red
						</Button>
						<Button color="red" isOutline onClick={handleClick}>
							RedOutline
						</Button>
						<Button color="red" isGhost onClick={handleClick}>
							RedGhost
						</Button>
					</div>
					<div className="flex gap-1">
						<Button color="slate" onClick={handleClick}>
							Slate
						</Button>
						<Button color="slate" isOutline onClick={handleClick}>
							SlateOutline
						</Button>
						<Button color="slate" isGhost onClick={handleClick}>
							SlateGhost
						</Button>
						<NextLink href="/" btn under>
							Link
						</NextLink>
					</div>

					<Text>アイコン付き</Text>
					<div className="flex gap-2">
						<Button color="primary" onClick={handleClick}>
							<AllowLeftIcon size={BUTTON_ICON_SIZE} />
							Back
						</Button>
						<Button color="primary" isOutline onClick={handleClick}>
							Next
							<AllowRightIcon size={BUTTON_ICON_SIZE} />
						</Button>
						<Button color="primary" isGhost onClick={handleClick}>
							<CloseIcon size={BUTTON_ICON_SIZE} />
							Close
						</Button>
					</div>

					<div className="flex gap-2">
						<div className="flex flex-col gap-2">
							<Text>ラジオボタン</Text>
							<RadioGroup
								options={RADIO_OPTIONOS}
								defaultValue={RADIO_OPTIONOS[0].value}
								ariaLabel="radioGroup"
								onClick={handleClick}
							/>
						</div>

						<div className="flex flex-col gap-2">
							<Text>スイッチ</Text>
							<Switch labalLeft="off" labalRight="on" onClick={handleClick} />
						</div>
					</div>

					<Text>ユーザーカード</Text>
					<div className="">
						<HoverUserCard
							userId="miyasan_0301"
							userName="みやさん | 学生"
							profileBody="みやさんです。hogehogehogehogehogehogehogehogehogehogehogehogehogehoge"
							followingCount="40"
							followerCount="130"
							iconPhoto="/oden.jpg"
						>
							<NextLink href="/" btn>
								<Image
									src="/oden.jpg"
									alt="Picture of the author"
									className="rounded-full"
									width={ICON_PHOTO_SIZE}
									height={ICON_PHOTO_SIZE}
								/>
							</NextLink>
						</HoverUserCard>
					</div>

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
		</MainBody>
	);
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;

const TweetDetailCardWrap = styled("div", {
	paddingX: "1rem",
	borderBottom: "1px solid $slate6",
});

type OptionsProps = {
	id: string;
	label: string;
	value: string;
	color?: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
};

const RADIO_OPTIONOS: OptionsProps[] = [
	{ id: "1", label: "OFF", value: "off" },
	{ id: "2", label: "ON", value: "on" },
];
