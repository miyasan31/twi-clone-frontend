import type { TweetDetailCardProps } from "src/components/TweetDetailCard";

export const TWEET_DATA: TweetDetailCardProps = {
	id: 1,
	userId: "miyasan_0301",
	tweetBody: "ツイートする",
	user: {
		id: "miyasan_0301",
		userName: "みやさん",
		profileBody:
			"JavaScript TypeScriptで書ける技術を中心に学習しています｜アルバイトで新規事業開発のエンジニアとして修行中｜2022.04〜東京でWEBエンジニア",
		iconPhoto: "",
	},
	commentCount: { count: "1" },
	retweetCount: { count: "3" },
	likeCount: { count: "10" },
};
