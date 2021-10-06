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
  iconPhoto: Scalars['String'];
  headerPhoto: Scalars['String'];
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
  GetUser: User;
  GetTweets: Array<Tweet>;
  GetTweet: Tweet;
  GetTweetsByUser: Array<Tweet>;
  GetRetweetsByUser: Array<Retweet>;
  GetLikesByUser: Array<Like>;
  GetCommentsByUser: Array<Comment>;
  GetFollowings: Array<Follow>;
  GetFollowers: Array<Follow>;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};


export type QueryGetTweetArgs = {
  id: Scalars['Int'];
};


export type QueryGetTweetsByUserArgs = {
  id: Scalars['String'];
};


export type QueryGetRetweetsByUserArgs = {
  id: Scalars['String'];
};


export type QueryGetLikesByUserArgs = {
  id: Scalars['String'];
};


export type QueryGetCommentsByUserArgs = {
  id: Scalars['String'];
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
  iconPhoto: Scalars['String'];
  headerPhoto: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  userName: Scalars['String'];
  profileBody: Scalars['String'];
  iconPhoto: Scalars['String'];
  headerPhoto: Scalars['String'];
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

export type GetUserCommentsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserCommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', tweet: { __typename?: 'Tweet', id: number, userId: string, tweetBody: string, createdAt: any, user: { __typename?: 'User', id: string, userName: string, profileBody: string, iconPhoto: string }, retweetCount: { __typename?: 'Count', count: string }, likeCount: { __typename?: 'Count', count: string }, commentCount: { __typename?: 'Count', count: string } } }> };

export type GetUserFollowersQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserFollowersQuery = { __typename?: 'Query', followers: Array<{ __typename?: 'Follow', id: number, userId: string, followingUserId: string, user: { __typename?: 'User', id: string, userName: string, profileBody: string, iconPhoto: string } }> };

export type GetUserFollowingsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserFollowingsQuery = { __typename?: 'Query', followings: Array<{ __typename?: 'Follow', id: number, userId: string, followingUserId: string, user: { __typename?: 'User', id: string, userName: string, profileBody: string, iconPhoto: string, createdAt: any } }> };

export type GetUserHeaderPhotoQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserHeaderPhotoQuery = { __typename?: 'Query', header: { __typename?: 'User', headerPhoto: string } };

export type GetUserIconPhotoQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserIconPhotoQuery = { __typename?: 'Query', icon: { __typename?: 'User', iconPhoto: string } };

export type GetUserTweetsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserTweetsQuery = { __typename?: 'Query', tweets: Array<{ __typename?: 'Tweet', id: number, tweetBody: string, createdAt: any, retweetCount: { __typename?: 'Count', count: string }, likeCount: { __typename?: 'Count', count: string }, commentCount: { __typename?: 'Count', count: string } }> };

export type GetUserLikesQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserLikesQuery = { __typename?: 'Query', likes: Array<{ __typename?: 'Like', tweet: { __typename?: 'Tweet', id: number, userId: string, tweetBody: string, createdAt: any, user: { __typename?: 'User', id: string, userName: string, profileBody: string, iconPhoto: string }, retweetCount: { __typename?: 'Count', count: string }, likeCount: { __typename?: 'Count', count: string }, commentCount: { __typename?: 'Count', count: string } } }> };

export type GetUserRetweetsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserRetweetsQuery = { __typename?: 'Query', retweets: Array<{ __typename?: 'Retweet', tweet: { __typename?: 'Tweet', id: number, tweetBody: string, createdAt: any, user: { __typename?: 'User', id: string, userName: string, profileBody: string, iconPhoto: string }, retweetCount: { __typename?: 'Count', count: string }, likeCount: { __typename?: 'Count', count: string }, commentCount: { __typename?: 'Count', count: string } } }> };

export type GetTweetDetailQueryVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type GetTweetDetailQuery = { __typename?: 'Query', tweet: { __typename?: 'Tweet', id: number, userId: string, tweetBody: string, createdAt: any, user: { __typename?: 'User', id: string, userName: string, profileBody: string, iconPhoto: string }, retweetCount: { __typename?: 'Count', count: string }, likeCount: { __typename?: 'Count', count: string }, commentCount: { __typename?: 'Count', count: string }, comments: Array<{ __typename?: 'Comment', id: number, commentBody: string, createdAt: any, user: { __typename?: 'User', id: string, userName: string, profileBody: string, iconPhoto: string } }> } };

export type GetTweetLikesQueryVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type GetTweetLikesQuery = { __typename?: 'Query', tweet: { __typename?: 'Tweet', likes: Array<{ __typename?: 'Like', id: number, userId: string, user: { __typename?: 'User', id: string, userName: string, profileBody: string } }> } };

export type GetTweetRetweetsQueryVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type GetTweetRetweetsQuery = { __typename?: 'Query', tweet: { __typename?: 'Tweet', retweets: Array<{ __typename?: 'Retweet', id: number, userId: string, user: { __typename?: 'User', id: string, userName: string, profileBody: string } }> } };

export type CreateTweetMutationVariables = Exact<{
  userId: Scalars['String'];
  tweetBody: Scalars['String'];
}>;


export type CreateTweetMutation = { __typename?: 'Mutation', tweet: { __typename?: 'Tweet', id: number, userId: string, tweetBody: string, createdAt: any } };

export type GetAllUserTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserTweetsQuery = { __typename?: 'Query', tweets: Array<{ __typename?: 'Tweet', user: { __typename?: 'User', id: string, userName: string, iconPhoto: string }, retweetCount: { __typename?: 'Count', count: string }, likeCount: { __typename?: 'Count', count: string }, commentCount: { __typename?: 'Count', count: string } }> };

export type DeleteTweetMutationVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type DeleteTweetMutation = { __typename?: 'Mutation', result: boolean };

export type UpdateProfileMutationVariables = Exact<{
  userId: Scalars['String'];
  userName: Scalars['String'];
  profileBody: Scalars['String'];
  iconPhoto: Scalars['String'];
  headerPhoto: Scalars['String'];
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', user: { __typename?: 'User', id: string, userName: string, profileBody: string, iconPhoto: string, headerPhoto: string } };

export type GetProfileQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetProfileQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, userName: string, profileBody: string, iconPhoto: string, headerPhoto: string, createdAt: any } };


export const GetUserCommentsDocument = gql`
    query GetUserComments($userId: String!) {
  comments: GetCommentsByUser(id: $userId) {
    tweet: GetTweetByComment {
      id
      userId
      tweetBody
      createdAt
      user: GetUserByTweet {
        id
        userName
        profileBody
        iconPhoto
      }
      retweetCount: GetRetweetCount {
        count
      }
      likeCount: GetLikeCount {
        count
      }
      commentCount: GetCommentCount {
        count
      }
    }
  }
}
    `;

/**
 * __useGetUserCommentsQuery__
 *
 * To run a query within a React component, call `useGetUserCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCommentsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetUserCommentsQuery, GetUserCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserCommentsQuery, GetUserCommentsQueryVariables>(GetUserCommentsDocument, options);
      }
export function useGetUserCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserCommentsQuery, GetUserCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserCommentsQuery, GetUserCommentsQueryVariables>(GetUserCommentsDocument, options);
        }
export type GetUserCommentsQueryHookResult = ReturnType<typeof useGetUserCommentsQuery>;
export type GetUserCommentsLazyQueryHookResult = ReturnType<typeof useGetUserCommentsLazyQuery>;
export type GetUserCommentsQueryResult = Apollo.QueryResult<GetUserCommentsQuery, GetUserCommentsQueryVariables>;
export const GetUserFollowersDocument = gql`
    query GetUserFollowers($userId: String!) {
  followers: GetFollowers(id: $userId) {
    id
    userId
    followingUserId
    user: GetUserByFollowing {
      id
      userName
      profileBody
      iconPhoto
    }
  }
}
    `;

/**
 * __useGetUserFollowersQuery__
 *
 * To run a query within a React component, call `useGetUserFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserFollowersQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserFollowersQuery(baseOptions: Apollo.QueryHookOptions<GetUserFollowersQuery, GetUserFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserFollowersQuery, GetUserFollowersQueryVariables>(GetUserFollowersDocument, options);
      }
export function useGetUserFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserFollowersQuery, GetUserFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserFollowersQuery, GetUserFollowersQueryVariables>(GetUserFollowersDocument, options);
        }
export type GetUserFollowersQueryHookResult = ReturnType<typeof useGetUserFollowersQuery>;
export type GetUserFollowersLazyQueryHookResult = ReturnType<typeof useGetUserFollowersLazyQuery>;
export type GetUserFollowersQueryResult = Apollo.QueryResult<GetUserFollowersQuery, GetUserFollowersQueryVariables>;
export const GetUserFollowingsDocument = gql`
    query GetUserFollowings($userId: String!) {
  followings: GetFollowings(id: $userId) {
    id
    userId
    followingUserId
    user: GetUserByFollower {
      id
      userName
      profileBody
      iconPhoto
      createdAt
    }
  }
}
    `;

/**
 * __useGetUserFollowingsQuery__
 *
 * To run a query within a React component, call `useGetUserFollowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserFollowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserFollowingsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserFollowingsQuery(baseOptions: Apollo.QueryHookOptions<GetUserFollowingsQuery, GetUserFollowingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserFollowingsQuery, GetUserFollowingsQueryVariables>(GetUserFollowingsDocument, options);
      }
export function useGetUserFollowingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserFollowingsQuery, GetUserFollowingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserFollowingsQuery, GetUserFollowingsQueryVariables>(GetUserFollowingsDocument, options);
        }
export type GetUserFollowingsQueryHookResult = ReturnType<typeof useGetUserFollowingsQuery>;
export type GetUserFollowingsLazyQueryHookResult = ReturnType<typeof useGetUserFollowingsLazyQuery>;
export type GetUserFollowingsQueryResult = Apollo.QueryResult<GetUserFollowingsQuery, GetUserFollowingsQueryVariables>;
export const GetUserHeaderPhotoDocument = gql`
    query GetUserHeaderPhoto($userId: String!) {
  header: GetUser(id: $userId) {
    headerPhoto
  }
}
    `;

/**
 * __useGetUserHeaderPhotoQuery__
 *
 * To run a query within a React component, call `useGetUserHeaderPhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserHeaderPhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserHeaderPhotoQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserHeaderPhotoQuery(baseOptions: Apollo.QueryHookOptions<GetUserHeaderPhotoQuery, GetUserHeaderPhotoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserHeaderPhotoQuery, GetUserHeaderPhotoQueryVariables>(GetUserHeaderPhotoDocument, options);
      }
export function useGetUserHeaderPhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserHeaderPhotoQuery, GetUserHeaderPhotoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserHeaderPhotoQuery, GetUserHeaderPhotoQueryVariables>(GetUserHeaderPhotoDocument, options);
        }
export type GetUserHeaderPhotoQueryHookResult = ReturnType<typeof useGetUserHeaderPhotoQuery>;
export type GetUserHeaderPhotoLazyQueryHookResult = ReturnType<typeof useGetUserHeaderPhotoLazyQuery>;
export type GetUserHeaderPhotoQueryResult = Apollo.QueryResult<GetUserHeaderPhotoQuery, GetUserHeaderPhotoQueryVariables>;
export const GetUserIconPhotoDocument = gql`
    query GetUserIconPhoto($userId: String!) {
  icon: GetUser(id: $userId) {
    iconPhoto
  }
}
    `;

/**
 * __useGetUserIconPhotoQuery__
 *
 * To run a query within a React component, call `useGetUserIconPhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserIconPhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserIconPhotoQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserIconPhotoQuery(baseOptions: Apollo.QueryHookOptions<GetUserIconPhotoQuery, GetUserIconPhotoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserIconPhotoQuery, GetUserIconPhotoQueryVariables>(GetUserIconPhotoDocument, options);
      }
export function useGetUserIconPhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserIconPhotoQuery, GetUserIconPhotoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserIconPhotoQuery, GetUserIconPhotoQueryVariables>(GetUserIconPhotoDocument, options);
        }
export type GetUserIconPhotoQueryHookResult = ReturnType<typeof useGetUserIconPhotoQuery>;
export type GetUserIconPhotoLazyQueryHookResult = ReturnType<typeof useGetUserIconPhotoLazyQuery>;
export type GetUserIconPhotoQueryResult = Apollo.QueryResult<GetUserIconPhotoQuery, GetUserIconPhotoQueryVariables>;
export const GetUserTweetsDocument = gql`
    query GetUserTweets($userId: String!) {
  tweets: GetTweetsByUser(id: $userId) {
    id
    tweetBody
    createdAt
    retweetCount: GetRetweetCount {
      count
    }
    likeCount: GetLikeCount {
      count
    }
    commentCount: GetCommentCount {
      count
    }
  }
}
    `;

/**
 * __useGetUserTweetsQuery__
 *
 * To run a query within a React component, call `useGetUserTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTweetsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserTweetsQuery(baseOptions: Apollo.QueryHookOptions<GetUserTweetsQuery, GetUserTweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTweetsQuery, GetUserTweetsQueryVariables>(GetUserTweetsDocument, options);
      }
export function useGetUserTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTweetsQuery, GetUserTweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTweetsQuery, GetUserTweetsQueryVariables>(GetUserTweetsDocument, options);
        }
export type GetUserTweetsQueryHookResult = ReturnType<typeof useGetUserTweetsQuery>;
export type GetUserTweetsLazyQueryHookResult = ReturnType<typeof useGetUserTweetsLazyQuery>;
export type GetUserTweetsQueryResult = Apollo.QueryResult<GetUserTweetsQuery, GetUserTweetsQueryVariables>;
export const GetUserLikesDocument = gql`
    query GetUserLikes($userId: String!) {
  likes: GetLikesByUser(id: $userId) {
    tweet: GetTweetByLike {
      id
      userId
      tweetBody
      createdAt
      user: GetUserByTweet {
        id
        userName
        profileBody
        iconPhoto
      }
      retweetCount: GetRetweetCount {
        count
      }
      likeCount: GetLikeCount {
        count
      }
      commentCount: GetCommentCount {
        count
      }
    }
  }
}
    `;

/**
 * __useGetUserLikesQuery__
 *
 * To run a query within a React component, call `useGetUserLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserLikesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserLikesQuery(baseOptions: Apollo.QueryHookOptions<GetUserLikesQuery, GetUserLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserLikesQuery, GetUserLikesQueryVariables>(GetUserLikesDocument, options);
      }
export function useGetUserLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserLikesQuery, GetUserLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserLikesQuery, GetUserLikesQueryVariables>(GetUserLikesDocument, options);
        }
export type GetUserLikesQueryHookResult = ReturnType<typeof useGetUserLikesQuery>;
export type GetUserLikesLazyQueryHookResult = ReturnType<typeof useGetUserLikesLazyQuery>;
export type GetUserLikesQueryResult = Apollo.QueryResult<GetUserLikesQuery, GetUserLikesQueryVariables>;
export const GetUserRetweetsDocument = gql`
    query GetUserRetweets($userId: String!) {
  retweets: GetRetweetsByUser(id: $userId) {
    tweet: GetTweetByRetweet {
      id
      tweetBody
      createdAt
      user: GetUserByTweet {
        id
        userName
        profileBody
        iconPhoto
      }
      retweetCount: GetRetweetCount {
        count
      }
      likeCount: GetLikeCount {
        count
      }
      commentCount: GetCommentCount {
        count
      }
    }
  }
}
    `;

/**
 * __useGetUserRetweetsQuery__
 *
 * To run a query within a React component, call `useGetUserRetweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserRetweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserRetweetsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserRetweetsQuery(baseOptions: Apollo.QueryHookOptions<GetUserRetweetsQuery, GetUserRetweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserRetweetsQuery, GetUserRetweetsQueryVariables>(GetUserRetweetsDocument, options);
      }
export function useGetUserRetweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserRetweetsQuery, GetUserRetweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserRetweetsQuery, GetUserRetweetsQueryVariables>(GetUserRetweetsDocument, options);
        }
export type GetUserRetweetsQueryHookResult = ReturnType<typeof useGetUserRetweetsQuery>;
export type GetUserRetweetsLazyQueryHookResult = ReturnType<typeof useGetUserRetweetsLazyQuery>;
export type GetUserRetweetsQueryResult = Apollo.QueryResult<GetUserRetweetsQuery, GetUserRetweetsQueryVariables>;
export const GetTweetDetailDocument = gql`
    query GetTweetDetail($tweetId: Int!) {
  tweet: GetTweet(id: $tweetId) {
    id
    userId
    tweetBody
    createdAt
    user: GetUserByTweet {
      id
      userName
      profileBody
      iconPhoto
    }
    retweetCount: GetRetweetCount {
      count
    }
    likeCount: GetLikeCount {
      count
    }
    commentCount: GetCommentCount {
      count
    }
    comments: GetCommentsByTweet {
      id
      commentBody
      createdAt
      user: GetUserByComment {
        id
        userName
        profileBody
        iconPhoto
      }
    }
  }
}
    `;

/**
 * __useGetTweetDetailQuery__
 *
 * To run a query within a React component, call `useGetTweetDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetDetailQuery({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useGetTweetDetailQuery(baseOptions: Apollo.QueryHookOptions<GetTweetDetailQuery, GetTweetDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetDetailQuery, GetTweetDetailQueryVariables>(GetTweetDetailDocument, options);
      }
export function useGetTweetDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetDetailQuery, GetTweetDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetDetailQuery, GetTweetDetailQueryVariables>(GetTweetDetailDocument, options);
        }
export type GetTweetDetailQueryHookResult = ReturnType<typeof useGetTweetDetailQuery>;
export type GetTweetDetailLazyQueryHookResult = ReturnType<typeof useGetTweetDetailLazyQuery>;
export type GetTweetDetailQueryResult = Apollo.QueryResult<GetTweetDetailQuery, GetTweetDetailQueryVariables>;
export const GetTweetLikesDocument = gql`
    query GetTweetLikes($tweetId: Int!) {
  tweet: GetTweet(id: $tweetId) {
    likes: GetLikesByTweet {
      id
      userId
      user: GetUserByLike {
        id
        userName
        profileBody
      }
    }
  }
}
    `;

/**
 * __useGetTweetLikesQuery__
 *
 * To run a query within a React component, call `useGetTweetLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetLikesQuery({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useGetTweetLikesQuery(baseOptions: Apollo.QueryHookOptions<GetTweetLikesQuery, GetTweetLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetLikesQuery, GetTweetLikesQueryVariables>(GetTweetLikesDocument, options);
      }
export function useGetTweetLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetLikesQuery, GetTweetLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetLikesQuery, GetTweetLikesQueryVariables>(GetTweetLikesDocument, options);
        }
export type GetTweetLikesQueryHookResult = ReturnType<typeof useGetTweetLikesQuery>;
export type GetTweetLikesLazyQueryHookResult = ReturnType<typeof useGetTweetLikesLazyQuery>;
export type GetTweetLikesQueryResult = Apollo.QueryResult<GetTweetLikesQuery, GetTweetLikesQueryVariables>;
export const GetTweetRetweetsDocument = gql`
    query GetTweetRetweets($tweetId: Int!) {
  tweet: GetTweet(id: $tweetId) {
    retweets: GetRetweetsByTweet {
      id
      userId
      user: GetUserByRetweet {
        id
        userName
        profileBody
      }
    }
  }
}
    `;

/**
 * __useGetTweetRetweetsQuery__
 *
 * To run a query within a React component, call `useGetTweetRetweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetRetweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetRetweetsQuery({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useGetTweetRetweetsQuery(baseOptions: Apollo.QueryHookOptions<GetTweetRetweetsQuery, GetTweetRetweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetRetweetsQuery, GetTweetRetweetsQueryVariables>(GetTweetRetweetsDocument, options);
      }
export function useGetTweetRetweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetRetweetsQuery, GetTweetRetweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetRetweetsQuery, GetTweetRetweetsQueryVariables>(GetTweetRetweetsDocument, options);
        }
export type GetTweetRetweetsQueryHookResult = ReturnType<typeof useGetTweetRetweetsQuery>;
export type GetTweetRetweetsLazyQueryHookResult = ReturnType<typeof useGetTweetRetweetsLazyQuery>;
export type GetTweetRetweetsQueryResult = Apollo.QueryResult<GetTweetRetweetsQuery, GetTweetRetweetsQueryVariables>;
export const CreateTweetDocument = gql`
    mutation CreateTweet($userId: String!, $tweetBody: String!) {
  tweet: CreateTweet(tweetDto: {userId: $userId, tweetBody: $tweetBody}) {
    id
    userId
    tweetBody
    createdAt
  }
}
    `;
export type CreateTweetMutationFn = Apollo.MutationFunction<CreateTweetMutation, CreateTweetMutationVariables>;

/**
 * __useCreateTweetMutation__
 *
 * To run a mutation, you first call `useCreateTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTweetMutation, { data, loading, error }] = useCreateTweetMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      tweetBody: // value for 'tweetBody'
 *   },
 * });
 */
export function useCreateTweetMutation(baseOptions?: Apollo.MutationHookOptions<CreateTweetMutation, CreateTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTweetMutation, CreateTweetMutationVariables>(CreateTweetDocument, options);
      }
export type CreateTweetMutationHookResult = ReturnType<typeof useCreateTweetMutation>;
export type CreateTweetMutationResult = Apollo.MutationResult<CreateTweetMutation>;
export type CreateTweetMutationOptions = Apollo.BaseMutationOptions<CreateTweetMutation, CreateTweetMutationVariables>;
export const GetAllUserTweetsDocument = gql`
    query GetAllUserTweets {
  tweets: GetTweets {
    user: GetUserByTweet {
      id
      userName
      iconPhoto
    }
    retweetCount: GetRetweetCount {
      count
    }
    likeCount: GetLikeCount {
      count
    }
    commentCount: GetCommentCount {
      count
    }
  }
}
    `;

/**
 * __useGetAllUserTweetsQuery__
 *
 * To run a query within a React component, call `useGetAllUserTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserTweetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserTweetsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserTweetsQuery, GetAllUserTweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserTweetsQuery, GetAllUserTweetsQueryVariables>(GetAllUserTweetsDocument, options);
      }
export function useGetAllUserTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserTweetsQuery, GetAllUserTweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserTweetsQuery, GetAllUserTweetsQueryVariables>(GetAllUserTweetsDocument, options);
        }
export type GetAllUserTweetsQueryHookResult = ReturnType<typeof useGetAllUserTweetsQuery>;
export type GetAllUserTweetsLazyQueryHookResult = ReturnType<typeof useGetAllUserTweetsLazyQuery>;
export type GetAllUserTweetsQueryResult = Apollo.QueryResult<GetAllUserTweetsQuery, GetAllUserTweetsQueryVariables>;
export const DeleteTweetDocument = gql`
    mutation DeleteTweet($tweetId: Int!) {
  result: DeleteTweet(id: $tweetId)
}
    `;
export type DeleteTweetMutationFn = Apollo.MutationFunction<DeleteTweetMutation, DeleteTweetMutationVariables>;

/**
 * __useDeleteTweetMutation__
 *
 * To run a mutation, you first call `useDeleteTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTweetMutation, { data, loading, error }] = useDeleteTweetMutation({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useDeleteTweetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTweetMutation, DeleteTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTweetMutation, DeleteTweetMutationVariables>(DeleteTweetDocument, options);
      }
export type DeleteTweetMutationHookResult = ReturnType<typeof useDeleteTweetMutation>;
export type DeleteTweetMutationResult = Apollo.MutationResult<DeleteTweetMutation>;
export type DeleteTweetMutationOptions = Apollo.BaseMutationOptions<DeleteTweetMutation, DeleteTweetMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($userId: String!, $userName: String!, $profileBody: String!, $iconPhoto: String!, $headerPhoto: String!) {
  user: UpdateUser(
    id: $userId
    userDto: {userName: $userName, profileBody: $profileBody, iconPhoto: $iconPhoto, headerPhoto: $headerPhoto}
  ) {
    id
    userName
    profileBody
    iconPhoto
    headerPhoto
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      userName: // value for 'userName'
 *      profileBody: // value for 'profileBody'
 *      iconPhoto: // value for 'iconPhoto'
 *      headerPhoto: // value for 'headerPhoto'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const GetProfileDocument = gql`
    query GetProfile($userId: String!) {
  user: GetUser(id: $userId) {
    id
    userName
    profileBody
    iconPhoto
    headerPhoto
    createdAt
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;