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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Int'];
  userId: Scalars['String'];
  tweetId: Scalars['Int'];
  commentBody: Scalars['String'];
  createdAt: Scalars['DateTime'];
  GetUserByComment: User;
  GetTweetByComment: Tweet;
};

export type Count = {
  __typename?: 'Count';
  count: Scalars['String'];
};

export type CreateCommentDto = {
  userId: Scalars['String'];
  tweetId: Scalars['Float'];
  commentBody: Scalars['String'];
};

export type CreateFollowDto = {
  userId: Scalars['String'];
  followingUserId: Scalars['String'];
};

export type CreateLikeDto = {
  userId: Scalars['String'];
  tweetId: Scalars['Float'];
};

export type CreateRetweetDto = {
  userId: Scalars['String'];
  tweetId: Scalars['Float'];
};

export type CreateTweetDto = {
  userId: Scalars['String'];
  tweetBody: Scalars['String'];
};

export type CreateUserDto = {
  id: Scalars['String'];
  userName: Scalars['String'];
  profileBody: Scalars['String'];
  iconId: Scalars['String'];
};


export type Follow = {
  __typename?: 'Follow';
  id: Scalars['Int'];
  userId: Scalars['String'];
  followingUserId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  GetUserByFollowing: User;
  GetUserByFollower: User;
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['Int'];
  userId: Scalars['String'];
  tweetId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  GetUserByLike: User;
  GetTweetByLike: Tweet;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateUser: User;
  UpdateUser: User;
  DeleteUser: Scalars['Boolean'];
  CreateTweet: Tweet;
  DeleteTweet: Scalars['Boolean'];
  CreateRetweet: Retweet;
  DeleteRetweet: Scalars['Boolean'];
  CreateLike: Like;
  DeleteLike: Scalars['Boolean'];
  CreateComment: Comment;
  DeleteComment: Scalars['Boolean'];
  CreateFollow: Follow;
  DeleteFollow: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  userDto: CreateUserDto;
};


export type MutationUpdateUserArgs = {
  userDto: UpdateUserDto;
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationCreateTweetArgs = {
  tweetDto: CreateTweetDto;
};


export type MutationDeleteTweetArgs = {
  id: Scalars['Int'];
};


export type MutationCreateRetweetArgs = {
  retweetDto: CreateRetweetDto;
};


export type MutationDeleteRetweetArgs = {
  id: Scalars['Int'];
};


export type MutationCreateLikeArgs = {
  likeDto: CreateLikeDto;
};


export type MutationDeleteLikeArgs = {
  id: Scalars['Int'];
};


export type MutationCreateCommentArgs = {
  commentDto: CreateCommentDto;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationCreateFollowArgs = {
  followDto: CreateFollowDto;
};


export type MutationDeleteFollowArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetUsers: Array<User>;
  GetUser: User;
  GetTweets: Array<Tweet>;
  GetTweet: Tweet;
  GetRetweets: Array<Retweet>;
  GetLikes: Array<Like>;
  GetComments: Array<Comment>;
  GetComment: Comment;
  GetFollows: Array<Follow>;
  GetFollowings: Array<Follow>;
  GetFollowers: Array<Follow>;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};


export type QueryGetTweetArgs = {
  id: Scalars['Int'];
};


export type QueryGetCommentArgs = {
  id: Scalars['Int'];
};


export type QueryGetFollowingsArgs = {
  id: Scalars['String'];
};


export type QueryGetFollowersArgs = {
  id: Scalars['String'];
};

export type Retweet = {
  __typename?: 'Retweet';
  id: Scalars['Int'];
  userId: Scalars['String'];
  tweetId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  GetUserByRetweet: User;
  GetTweetByRetweet: Tweet;
};

export type Tweet = {
  __typename?: 'Tweet';
  id: Scalars['Int'];
  userId: Scalars['String'];
  tweetBody: Scalars['String'];
  createdAt: Scalars['DateTime'];
  GetUserByTweet: User;
  GetRetweetsByTweet: Array<Retweet>;
  GetLikesByTweet: Array<Like>;
  GetCommentsByTweet: Array<Comment>;
  GetLikeCount: Count;
  GetRetweetCount: Count;
  GetCommentCount: Count;
};

export type UpdateUserDto = {
  userName: Scalars['String'];
  profileBody: Scalars['String'];
  iconId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  userName: Scalars['String'];
  profileBody: Scalars['String'];
  iconId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  GetTweetsByUser: Array<Tweet>;
  GetRetweetsByUser: Array<Retweet>;
  GetLikesByUser: Array<Like>;
  GetCommentsByUser: Array<Comment>;
  GetFollowersByUser: Array<Follow>;
  GetFollowingsByUser: Array<Follow>;
  GetFollowingCount: Count;
  GetFollowerCount: Count;
};

export type GetTweetQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTweetQuery = { __typename?: 'Query', GetTweet: { __typename?: 'Tweet', id: number, userId: string, tweetBody: string, createdAt: any } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', GetUser: { __typename?: 'User', id: string, userName: string, profileBody: string, createdAt: any } };


export const GetTweetDocument = gql`
    query GetTweet {
  GetTweet(id: 1) {
    id
    userId
    tweetBody
    createdAt
  }
}
    `;

/**
 * __useGetTweetQuery__
 *
 * To run a query within a React component, call `useGetTweetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTweetQuery(baseOptions?: Apollo.QueryHookOptions<GetTweetQuery, GetTweetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetQuery, GetTweetQueryVariables>(GetTweetDocument, options);
      }
export function useGetTweetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetQuery, GetTweetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetQuery, GetTweetQueryVariables>(GetTweetDocument, options);
        }
export type GetTweetQueryHookResult = ReturnType<typeof useGetTweetQuery>;
export type GetTweetLazyQueryHookResult = ReturnType<typeof useGetTweetLazyQuery>;
export type GetTweetQueryResult = Apollo.QueryResult<GetTweetQuery, GetTweetQueryVariables>;
export const GetUserDocument = gql`
    query GetUser {
  GetUser(id: "miyasan_0301") {
    id
    userName
    profileBody
    createdAt
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;