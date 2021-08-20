import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Follow = {
  __typename?: 'Follow';
  followId: Scalars['Int'];
  userId: Scalars['String'];
  followingId: Scalars['String'];
  createdAt: Scalars['String'];
};

export type FollowFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  followId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  followingId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  followId_lt?: Maybe<Scalars['Int']>;
  followId_lte?: Maybe<Scalars['Int']>;
  followId_gt?: Maybe<Scalars['Int']>;
  followId_gte?: Maybe<Scalars['Int']>;
  followId_neq?: Maybe<Scalars['Int']>;
  userId_neq?: Maybe<Scalars['String']>;
  followingId_neq?: Maybe<Scalars['String']>;
  createdAt_neq?: Maybe<Scalars['String']>;
};

export type FollowInput = {
  followId: Scalars['Int'];
  userId: Scalars['String'];
  followingId: Scalars['String'];
  createdAt: Scalars['String'];
};

export type Like = {
  __typename?: 'Like';
  likeId: Scalars['Int'];
  userId: Scalars['String'];
  tweetId: Scalars['String'];
  createdAt: Scalars['String'];
};

export type LikeFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  likeId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  tweetId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  likeId_lt?: Maybe<Scalars['Int']>;
  likeId_lte?: Maybe<Scalars['Int']>;
  likeId_gt?: Maybe<Scalars['Int']>;
  likeId_gte?: Maybe<Scalars['Int']>;
  likeId_neq?: Maybe<Scalars['Int']>;
  userId_neq?: Maybe<Scalars['String']>;
  tweetId_neq?: Maybe<Scalars['String']>;
  createdAt_neq?: Maybe<Scalars['String']>;
};

export type LikeInput = {
  likeId: Scalars['Int'];
  userId: Scalars['String'];
  tweetId: Scalars['String'];
  createdAt: Scalars['String'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  updateUser?: Maybe<User>;
  removeUser?: Maybe<User>;
  createTweetBody?: Maybe<TweetBody>;
  createManyTweetBody?: Maybe<Array<Maybe<TweetBody>>>;
  updateTweetBody?: Maybe<TweetBody>;
  removeTweetBody?: Maybe<TweetBody>;
  createLike?: Maybe<Like>;
  createManyLike?: Maybe<Array<Maybe<Like>>>;
  updateLike?: Maybe<Like>;
  removeLike?: Maybe<Like>;
  createFollow?: Maybe<Follow>;
  createManyFollow?: Maybe<Array<Maybe<Follow>>>;
  updateFollow?: Maybe<Follow>;
  removeFollow?: Maybe<Follow>;
};


export type MutationCreateUserArgs = {
  userId: Scalars['String'];
  userName: Scalars['String'];
  profile: Scalars['String'];
  iconPath: Scalars['String'];
  createdAt: Scalars['String'];
};


export type MutationCreateManyUserArgs = {
  data?: Maybe<Array<Maybe<UserInput>>>;
};


export type MutationUpdateUserArgs = {
  userId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  iconPath?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationCreateTweetBodyArgs = {
  tweetId: Scalars['String'];
  userId: Scalars['String'];
  tweetBody: Scalars['String'];
  retweetId?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
};


export type MutationCreateManyTweetBodyArgs = {
  data?: Maybe<Array<Maybe<TweetBodyInput>>>;
};


export type MutationUpdateTweetBodyArgs = {
  tweetId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  tweetBody?: Maybe<Scalars['String']>;
  retweetId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
};


export type MutationRemoveTweetBodyArgs = {
  id: Scalars['ID'];
};


export type MutationCreateLikeArgs = {
  likeId: Scalars['Int'];
  userId: Scalars['String'];
  tweetId: Scalars['String'];
  createdAt: Scalars['String'];
};


export type MutationCreateManyLikeArgs = {
  data?: Maybe<Array<Maybe<LikeInput>>>;
};


export type MutationUpdateLikeArgs = {
  likeId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  tweetId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
};


export type MutationRemoveLikeArgs = {
  id: Scalars['ID'];
};


export type MutationCreateFollowArgs = {
  followId: Scalars['Int'];
  userId: Scalars['String'];
  followingId: Scalars['String'];
  createdAt: Scalars['String'];
};


export type MutationCreateManyFollowArgs = {
  data?: Maybe<Array<Maybe<FollowInput>>>;
};


export type MutationUpdateFollowArgs = {
  followId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  followingId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
};


export type MutationRemoveFollowArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  User?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  _allUsersMeta?: Maybe<ListMetadata>;
  TweetBody?: Maybe<TweetBody>;
  allTweetBodies?: Maybe<Array<Maybe<TweetBody>>>;
  _allTweetBodiesMeta?: Maybe<ListMetadata>;
  Like?: Maybe<Like>;
  allLikes?: Maybe<Array<Maybe<Like>>>;
  _allLikesMeta?: Maybe<ListMetadata>;
  Follow?: Maybe<Follow>;
  allFollows?: Maybe<Array<Maybe<Follow>>>;
  _allFollowsMeta?: Maybe<ListMetadata>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryAllUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<UserFilter>;
};


export type Query_AllUsersMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<UserFilter>;
};


export type QueryTweetBodyArgs = {
  id: Scalars['ID'];
};


export type QueryAllTweetBodiesArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<TweetBodyFilter>;
};


export type Query_AllTweetBodiesMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<TweetBodyFilter>;
};


export type QueryLikeArgs = {
  id: Scalars['ID'];
};


export type QueryAllLikesArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<LikeFilter>;
};


export type Query_AllLikesMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<LikeFilter>;
};


export type QueryFollowArgs = {
  id: Scalars['ID'];
};


export type QueryAllFollowsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<FollowFilter>;
};


export type Query_AllFollowsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FollowFilter>;
};

export type TweetBody = {
  __typename?: 'TweetBody';
  tweetId: Scalars['String'];
  userId: Scalars['String'];
  tweetBody: Scalars['String'];
  retweetId?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
};

export type TweetBodyFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tweetId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  tweetBody?: Maybe<Scalars['String']>;
  retweetId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  tweetId_neq?: Maybe<Scalars['String']>;
  userId_neq?: Maybe<Scalars['String']>;
  tweetBody_neq?: Maybe<Scalars['String']>;
  retweetId_neq?: Maybe<Scalars['String']>;
  createdAt_neq?: Maybe<Scalars['String']>;
};

export type TweetBodyInput = {
  tweetId: Scalars['String'];
  userId: Scalars['String'];
  tweetBody: Scalars['String'];
  retweetId?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  userId: Scalars['String'];
  userName: Scalars['String'];
  profile: Scalars['String'];
  iconPath: Scalars['String'];
  createdAt: Scalars['String'];
};

export type UserFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  userId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  iconPath?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  userId_neq?: Maybe<Scalars['String']>;
  userName_neq?: Maybe<Scalars['String']>;
  profile_neq?: Maybe<Scalars['String']>;
  iconPath_neq?: Maybe<Scalars['String']>;
  createdAt_neq?: Maybe<Scalars['String']>;
};

export type UserInput = {
  userId: Scalars['String'];
  userName: Scalars['String'];
  profile: Scalars['String'];
  iconPath: Scalars['String'];
  createdAt: Scalars['String'];
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', allUsers?: Maybe<Array<Maybe<{ __typename?: 'User', userId: string, userName: string, profile: string, iconPath: string, createdAt: string }>>> };


export const UsersDocument = gql`
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

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;