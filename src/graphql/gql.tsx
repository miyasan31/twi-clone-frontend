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
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['Int'];
  userId: Scalars['String'];
  tweetId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
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
  tweetDto: CreateCommentDto;
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

export type Retweet = {
  __typename?: 'Retweet';
  id: Scalars['Int'];
  userId: Scalars['String'];
  tweetId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type Tweet = {
  __typename?: 'Tweet';
  id: Scalars['Int'];
  userId: Scalars['String'];
  tweetBody: Scalars['String'];
  createdAt: Scalars['DateTime'];
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
  GetRetweetsByUser: Array<Tweet>;
  GetLikesByUser: Array<Like>;
  GetCommentsByUser: Array<Comment>;
  GetFollowingCount: Count;
  GetFollowerCount: Count;
};

export type GetTweetQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTweetQuery = { __typename?: 'Query', GetTweet: { __typename?: 'Tweet', id: number, userId: string, tweetBody: string, createdAt: any, GetLikesByTweet: Array<{ __typename?: 'Like', tweetId: number }>, GetLikeCount: { __typename?: 'Count', count: string } } };


export const GetTweetDocument = gql`
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