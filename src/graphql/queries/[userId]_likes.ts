// プロフィール画面/like一覧（"/[userId]/likes"）
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
