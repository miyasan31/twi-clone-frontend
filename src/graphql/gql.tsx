import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** Date type */
	Date: any;
};

export type Comment = {
	__typename?: "Comment";
	id: Scalars["ID"];
	postId: Scalars["Int"];
	body: Scalars["String"];
	date: Scalars["Date"];
};

export type CommentFilter = {
	q?: Maybe<Scalars["String"]>;
	ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
	id?: Maybe<Scalars["ID"]>;
	postId?: Maybe<Scalars["Int"]>;
	body?: Maybe<Scalars["String"]>;
	date?: Maybe<Scalars["Date"]>;
	id_neq?: Maybe<Scalars["ID"]>;
	postId_lt?: Maybe<Scalars["Int"]>;
	postId_lte?: Maybe<Scalars["Int"]>;
	postId_gt?: Maybe<Scalars["Int"]>;
	postId_gte?: Maybe<Scalars["Int"]>;
	postId_neq?: Maybe<Scalars["Int"]>;
	body_neq?: Maybe<Scalars["String"]>;
	date_lt?: Maybe<Scalars["Date"]>;
	date_lte?: Maybe<Scalars["Date"]>;
	date_gt?: Maybe<Scalars["Date"]>;
	date_gte?: Maybe<Scalars["Date"]>;
	date_neq?: Maybe<Scalars["Date"]>;
};

export type CommentInput = {
	id: Scalars["ID"];
	postId: Scalars["Int"];
	body: Scalars["String"];
	date: Scalars["Date"];
};

export type ListMetadata = {
	__typename?: "ListMetadata";
	count?: Maybe<Scalars["Int"]>;
};

export type Mutation = {
	__typename?: "Mutation";
	createPost?: Maybe<Post>;
	createManyPost?: Maybe<Array<Maybe<Post>>>;
	updatePost?: Maybe<Post>;
	removePost?: Maybe<Post>;
	createUser?: Maybe<User>;
	createManyUser?: Maybe<Array<Maybe<User>>>;
	updateUser?: Maybe<User>;
	removeUser?: Maybe<User>;
	createComment?: Maybe<Comment>;
	createManyComment?: Maybe<Array<Maybe<Comment>>>;
	updateComment?: Maybe<Comment>;
	removeComment?: Maybe<Comment>;
	createRocketInventory?: Maybe<RocketInventory>;
	createManyRocketInventory?: Maybe<Array<Maybe<RocketInventory>>>;
	updateRocketInventory?: Maybe<RocketInventory>;
	removeRocketInventory?: Maybe<RocketInventory>;
};

export type MutationCreatePostArgs = {
	title: Scalars["String"];
	views: Scalars["Int"];
	userId: Scalars["Int"];
};

export type MutationCreateManyPostArgs = {
	data?: Maybe<Array<Maybe<PostInput>>>;
};

export type MutationUpdatePostArgs = {
	id: Scalars["ID"];
	title?: Maybe<Scalars["String"]>;
	views?: Maybe<Scalars["Int"]>;
	userId?: Maybe<Scalars["Int"]>;
};

export type MutationRemovePostArgs = {
	id: Scalars["ID"];
};

export type MutationCreateUserArgs = {
	name: Scalars["String"];
};

export type MutationCreateManyUserArgs = {
	data?: Maybe<Array<Maybe<UserInput>>>;
};

export type MutationUpdateUserArgs = {
	id: Scalars["ID"];
	name?: Maybe<Scalars["String"]>;
};

export type MutationRemoveUserArgs = {
	id: Scalars["ID"];
};

export type MutationCreateCommentArgs = {
	postId: Scalars["Int"];
	body: Scalars["String"];
	date: Scalars["Date"];
};

export type MutationCreateManyCommentArgs = {
	data?: Maybe<Array<Maybe<CommentInput>>>;
};

export type MutationUpdateCommentArgs = {
	id: Scalars["ID"];
	postId?: Maybe<Scalars["Int"]>;
	body?: Maybe<Scalars["String"]>;
	date?: Maybe<Scalars["Date"]>;
};

export type MutationRemoveCommentArgs = {
	id: Scalars["ID"];
};

export type MutationCreateRocketInventoryArgs = {
	model: Scalars["String"];
	year: Scalars["Int"];
	stock: Scalars["Int"];
};

export type MutationCreateManyRocketInventoryArgs = {
	data?: Maybe<Array<Maybe<RocketInventoryInput>>>;
};

export type MutationUpdateRocketInventoryArgs = {
	id: Scalars["ID"];
	model?: Maybe<Scalars["String"]>;
	year?: Maybe<Scalars["Int"]>;
	stock?: Maybe<Scalars["Int"]>;
};

export type MutationRemoveRocketInventoryArgs = {
	id: Scalars["ID"];
};

export type Post = {
	__typename?: "Post";
	id: Scalars["ID"];
	title: Scalars["String"];
	views: Scalars["Int"];
	userId: Scalars["Int"];
};

export type PostFilter = {
	q?: Maybe<Scalars["String"]>;
	ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
	id?: Maybe<Scalars["ID"]>;
	title?: Maybe<Scalars["String"]>;
	views?: Maybe<Scalars["Int"]>;
	userId?: Maybe<Scalars["Int"]>;
	id_neq?: Maybe<Scalars["ID"]>;
	title_neq?: Maybe<Scalars["String"]>;
	views_lt?: Maybe<Scalars["Int"]>;
	views_lte?: Maybe<Scalars["Int"]>;
	views_gt?: Maybe<Scalars["Int"]>;
	views_gte?: Maybe<Scalars["Int"]>;
	views_neq?: Maybe<Scalars["Int"]>;
	userId_lt?: Maybe<Scalars["Int"]>;
	userId_lte?: Maybe<Scalars["Int"]>;
	userId_gt?: Maybe<Scalars["Int"]>;
	userId_gte?: Maybe<Scalars["Int"]>;
	userId_neq?: Maybe<Scalars["Int"]>;
};

export type PostInput = {
	id: Scalars["ID"];
	title: Scalars["String"];
	views: Scalars["Int"];
	userId: Scalars["Int"];
};

export type Query = {
	__typename?: "Query";
	Post?: Maybe<Post>;
	allPosts?: Maybe<Array<Maybe<Post>>>;
	_allPostsMeta?: Maybe<ListMetadata>;
	User?: Maybe<User>;
	allUsers?: Maybe<Array<Maybe<User>>>;
	_allUsersMeta?: Maybe<ListMetadata>;
	Comment?: Maybe<Comment>;
	allComments?: Maybe<Array<Maybe<Comment>>>;
	_allCommentsMeta?: Maybe<ListMetadata>;
	RocketInventory?: Maybe<RocketInventory>;
	allRocketInventories?: Maybe<Array<Maybe<RocketInventory>>>;
	_allRocketInventoriesMeta?: Maybe<ListMetadata>;
};

export type QueryPostArgs = {
	id: Scalars["ID"];
};

export type QueryAllPostsArgs = {
	page?: Maybe<Scalars["Int"]>;
	perPage?: Maybe<Scalars["Int"]>;
	sortField?: Maybe<Scalars["String"]>;
	sortOrder?: Maybe<Scalars["String"]>;
	filter?: Maybe<PostFilter>;
};

export type Query_AllPostsMetaArgs = {
	page?: Maybe<Scalars["Int"]>;
	perPage?: Maybe<Scalars["Int"]>;
	filter?: Maybe<PostFilter>;
};

export type QueryUserArgs = {
	id: Scalars["ID"];
};

export type QueryAllUsersArgs = {
	page?: Maybe<Scalars["Int"]>;
	perPage?: Maybe<Scalars["Int"]>;
	sortField?: Maybe<Scalars["String"]>;
	sortOrder?: Maybe<Scalars["String"]>;
	filter?: Maybe<UserFilter>;
};

export type Query_AllUsersMetaArgs = {
	page?: Maybe<Scalars["Int"]>;
	perPage?: Maybe<Scalars["Int"]>;
	filter?: Maybe<UserFilter>;
};

export type QueryCommentArgs = {
	id: Scalars["ID"];
};

export type QueryAllCommentsArgs = {
	page?: Maybe<Scalars["Int"]>;
	perPage?: Maybe<Scalars["Int"]>;
	sortField?: Maybe<Scalars["String"]>;
	sortOrder?: Maybe<Scalars["String"]>;
	filter?: Maybe<CommentFilter>;
};

export type Query_AllCommentsMetaArgs = {
	page?: Maybe<Scalars["Int"]>;
	perPage?: Maybe<Scalars["Int"]>;
	filter?: Maybe<CommentFilter>;
};

export type QueryRocketInventoryArgs = {
	id: Scalars["ID"];
};

export type QueryAllRocketInventoriesArgs = {
	page?: Maybe<Scalars["Int"]>;
	perPage?: Maybe<Scalars["Int"]>;
	sortField?: Maybe<Scalars["String"]>;
	sortOrder?: Maybe<Scalars["String"]>;
	filter?: Maybe<RocketInventoryFilter>;
};

export type Query_AllRocketInventoriesMetaArgs = {
	page?: Maybe<Scalars["Int"]>;
	perPage?: Maybe<Scalars["Int"]>;
	filter?: Maybe<RocketInventoryFilter>;
};

export type RocketInventory = {
	__typename?: "RocketInventory";
	id: Scalars["ID"];
	model: Scalars["String"];
	year: Scalars["Int"];
	stock: Scalars["Int"];
};

export type RocketInventoryFilter = {
	q?: Maybe<Scalars["String"]>;
	ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
	id?: Maybe<Scalars["ID"]>;
	model?: Maybe<Scalars["String"]>;
	year?: Maybe<Scalars["Int"]>;
	stock?: Maybe<Scalars["Int"]>;
	id_neq?: Maybe<Scalars["ID"]>;
	model_neq?: Maybe<Scalars["String"]>;
	year_lt?: Maybe<Scalars["Int"]>;
	year_lte?: Maybe<Scalars["Int"]>;
	year_gt?: Maybe<Scalars["Int"]>;
	year_gte?: Maybe<Scalars["Int"]>;
	year_neq?: Maybe<Scalars["Int"]>;
	stock_lt?: Maybe<Scalars["Int"]>;
	stock_lte?: Maybe<Scalars["Int"]>;
	stock_gt?: Maybe<Scalars["Int"]>;
	stock_gte?: Maybe<Scalars["Int"]>;
	stock_neq?: Maybe<Scalars["Int"]>;
};

export type RocketInventoryInput = {
	id: Scalars["ID"];
	model: Scalars["String"];
	year: Scalars["Int"];
	stock: Scalars["Int"];
};

export type User = {
	__typename?: "User";
	id: Scalars["ID"];
	name: Scalars["String"];
};

export type UserFilter = {
	q?: Maybe<Scalars["String"]>;
	ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
	id?: Maybe<Scalars["ID"]>;
	name?: Maybe<Scalars["String"]>;
	id_neq?: Maybe<Scalars["ID"]>;
	name_neq?: Maybe<Scalars["String"]>;
};

export type UserInput = {
	id: Scalars["ID"];
	name: Scalars["String"];
};

export type PostsQueryVariables = Exact<{ [key: string]: never }>;

export type PostsQuery = {
	__typename?: "Query";
	allPosts?: Maybe<Array<Maybe<{ __typename?: "Post"; id: string; title: string; views: number; userId: number }>>>;
};

export const PostsDocument = gql`
	query Posts {
		allPosts {
			id
			title
			views
			userId
		}
	}
`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
}
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
