// サインイン画面（"/"）
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
