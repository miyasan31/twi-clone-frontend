// プロフィール画面/ツイート詳細（"/[userId]/status/[tweetId]"）
import { gql } from "@apollo/client";

export const user = gql`
	query Users {
		allUsers {
			userId
			userName
			profile
			iconPath
			createdAt
		}
	}
`;
