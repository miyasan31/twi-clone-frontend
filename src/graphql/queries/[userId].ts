// プロフィール画面/ツイート一覧（"/[userId]"）
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
