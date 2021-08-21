// プロフィール画面/メディア一覧（"/[userId]/media"）
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
