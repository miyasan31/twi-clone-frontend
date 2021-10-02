// ホーム画面（"/home"）
import { gql } from "@apollo/client";

gql`
	query GetTweet {
		GetTweet(id: 1) {
			id
			userId
			tweetBody
			createdAt
			GetLikesByTweet {
				tweetId
			}
			GetLikeCount {
				count
			}
		}
	}
`;
