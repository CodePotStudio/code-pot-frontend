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
  /** Date custom scalar type */
  Date: Date;
};

export type Challange = {
  __typename?: 'Challange';
  id: Scalars['Int'];
  thumbnail: Scalars['String'];
  name: Scalars['String'];
  remarks: Scalars['String'];
  status: ChallangeStatus;
  startDateTime: Scalars['Date'];
  endDateTime: Scalars['Date'];
};

export type ChallangeFilter = {
  status: ChallangeStatus;
};

export enum ChallangeStatus {
  Preparing = 'PREPARING',
  Recruiting = 'RECRUITING',
  RecruitmentClosed = 'RECRUITMENT_CLOSED',
  Inprogress = 'INPROGRESS',
  Closed = 'CLOSED'
}


export type Enroll = {
  __typename?: 'Enroll';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  challangeId: Scalars['Int'];
  status: EnrollStatus;
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export enum EnrollStatus {
  Processing = 'PROCESSING',
  Completed = 'COMPLETED',
  Canceled = 'CANCELED'
}

export type Mutation = {
  __typename?: 'Mutation';
  registerRefundAccount: User;
  activateUser: User;
  createUser: CreateUserResponse;
  enrollChallange: Enroll;
};


export type MutationRegisterRefundAccountArgs = {
  bankCode: Scalars['String'];
  bankAccount: Scalars['String'];
};


export type MutationActivateUserArgs = {
  mobile: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  githubId: Scalars['Int'];
};


export type MutationEnrollChallangeArgs = {
  challangeId: Scalars['Int'];
};

export type Profile = {
  __typename?: 'Profile';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Me>;
  findChallanges: Array<Challange>;
  getChallange?: Maybe<Challange>;
};


export type QueryFindChallangesArgs = {
  filter?: Maybe<ChallangeFilter>;
};


export type QueryGetChallangeArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  RBankAccount?: Maybe<Scalars['String']>;
  RBankCode?: Maybe<Scalars['String']>;
};

export type AccessToken = {
  __typename?: 'accessToken';
  token: Scalars['String'];
};

export type CreateUserResponse = {
  __typename?: 'createUserResponse';
  token: Scalars['String'];
  user: User;
};

export type Me = {
  __typename?: 'me';
  user: User;
  profile?: Maybe<Profile>;
};

export type ChallangeFieldsFragment = (
  { __typename?: 'Challange' }
  & Pick<Challange, 'id' | 'thumbnail' | 'name' | 'remarks' | 'status' | 'startDateTime' | 'endDateTime'>
);

export type EnrollFieldsFragment = (
  { __typename?: 'Enroll' }
  & Pick<Enroll, 'id' | 'challangeId' | 'userId' | 'status' | 'createdAt' | 'updatedAt'>
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'mobile' | 'isActive' | 'RBankAccount'>
);

export type ActivateUserMutationVariables = Exact<{
  mobile: Scalars['String'];
  name: Scalars['String'];
}>;


export type ActivateUserMutation = (
  { __typename?: 'Mutation' }
  & { activateUser: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  githubId: Scalars['Int'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'createUserResponse' }
    & Pick<CreateUserResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & UserFieldsFragment
    ) }
  ) }
);

export type EnrollChallangeMutationVariables = Exact<{
  challangeId: Scalars['Int'];
}>;


export type EnrollChallangeMutation = (
  { __typename?: 'Mutation' }
  & { enrollChallange: (
    { __typename?: 'Enroll' }
    & EnrollFieldsFragment
  ) }
);

export type FindChallangesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindChallangesQuery = (
  { __typename?: 'Query' }
  & { findChallanges: Array<(
    { __typename?: 'Challange' }
    & ChallangeFieldsFragment
  )> }
);

export type GetChallangeQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetChallangeQuery = (
  { __typename?: 'Query' }
  & { getChallange?: Maybe<(
    { __typename?: 'Challange' }
    & ChallangeFieldsFragment
  )> }
);

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'me' }
    & { user: (
      { __typename?: 'User' }
      & UserFieldsFragment
    ), profile?: Maybe<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'avatar'>
    )> }
  )> }
);

export const ChallangeFieldsFragmentDoc = gql`
    fragment ChallangeFields on Challange {
  id
  thumbnail
  name
  remarks
  status
  startDateTime
  endDateTime
}
    `;
export const EnrollFieldsFragmentDoc = gql`
    fragment EnrollFields on Enroll {
  id
  challangeId
  userId
  status
  createdAt
  updatedAt
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  name
  email
  mobile
  isActive
  RBankAccount
}
    `;
export const ActivateUserDocument = gql`
    mutation activateUser($mobile: String!, $name: String!) {
  activateUser(mobile: $mobile, name: $name) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type ActivateUserMutationFn = Apollo.MutationFunction<ActivateUserMutation, ActivateUserMutationVariables>;

/**
 * __useActivateUserMutation__
 *
 * To run a mutation, you first call `useActivateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateUserMutation, { data, loading, error }] = useActivateUserMutation({
 *   variables: {
 *      mobile: // value for 'mobile'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useActivateUserMutation(baseOptions?: Apollo.MutationHookOptions<ActivateUserMutation, ActivateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActivateUserMutation, ActivateUserMutationVariables>(ActivateUserDocument, options);
      }
export type ActivateUserMutationHookResult = ReturnType<typeof useActivateUserMutation>;
export type ActivateUserMutationResult = Apollo.MutationResult<ActivateUserMutation>;
export type ActivateUserMutationOptions = Apollo.BaseMutationOptions<ActivateUserMutation, ActivateUserMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($email: String!, $avatar: String, $githubId: Int!) {
  createUser(email: $email, avatar: $avatar, githubId: $githubId) {
    token
    user {
      ...UserFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      avatar: // value for 'avatar'
 *      githubId: // value for 'githubId'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const EnrollChallangeDocument = gql`
    mutation enrollChallange($challangeId: Int!) {
  enrollChallange(challangeId: $challangeId) {
    ...EnrollFields
  }
}
    ${EnrollFieldsFragmentDoc}`;
export type EnrollChallangeMutationFn = Apollo.MutationFunction<EnrollChallangeMutation, EnrollChallangeMutationVariables>;

/**
 * __useEnrollChallangeMutation__
 *
 * To run a mutation, you first call `useEnrollChallangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnrollChallangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enrollChallangeMutation, { data, loading, error }] = useEnrollChallangeMutation({
 *   variables: {
 *      challangeId: // value for 'challangeId'
 *   },
 * });
 */
export function useEnrollChallangeMutation(baseOptions?: Apollo.MutationHookOptions<EnrollChallangeMutation, EnrollChallangeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnrollChallangeMutation, EnrollChallangeMutationVariables>(EnrollChallangeDocument, options);
      }
export type EnrollChallangeMutationHookResult = ReturnType<typeof useEnrollChallangeMutation>;
export type EnrollChallangeMutationResult = Apollo.MutationResult<EnrollChallangeMutation>;
export type EnrollChallangeMutationOptions = Apollo.BaseMutationOptions<EnrollChallangeMutation, EnrollChallangeMutationVariables>;
export const FindChallangesDocument = gql`
    query findChallanges {
  findChallanges {
    ...ChallangeFields
  }
}
    ${ChallangeFieldsFragmentDoc}`;

/**
 * __useFindChallangesQuery__
 *
 * To run a query within a React component, call `useFindChallangesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindChallangesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindChallangesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindChallangesQuery(baseOptions?: Apollo.QueryHookOptions<FindChallangesQuery, FindChallangesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindChallangesQuery, FindChallangesQueryVariables>(FindChallangesDocument, options);
      }
export function useFindChallangesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindChallangesQuery, FindChallangesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindChallangesQuery, FindChallangesQueryVariables>(FindChallangesDocument, options);
        }
export type FindChallangesQueryHookResult = ReturnType<typeof useFindChallangesQuery>;
export type FindChallangesLazyQueryHookResult = ReturnType<typeof useFindChallangesLazyQuery>;
export type FindChallangesQueryResult = Apollo.QueryResult<FindChallangesQuery, FindChallangesQueryVariables>;
export const GetChallangeDocument = gql`
    query getChallange($id: Int!) {
  getChallange(id: $id) {
    ...ChallangeFields
  }
}
    ${ChallangeFieldsFragmentDoc}`;

/**
 * __useGetChallangeQuery__
 *
 * To run a query within a React component, call `useGetChallangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChallangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChallangeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChallangeQuery(baseOptions: Apollo.QueryHookOptions<GetChallangeQuery, GetChallangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChallangeQuery, GetChallangeQueryVariables>(GetChallangeDocument, options);
      }
export function useGetChallangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChallangeQuery, GetChallangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChallangeQuery, GetChallangeQueryVariables>(GetChallangeDocument, options);
        }
export type GetChallangeQueryHookResult = ReturnType<typeof useGetChallangeQuery>;
export type GetChallangeLazyQueryHookResult = ReturnType<typeof useGetChallangeLazyQuery>;
export type GetChallangeQueryResult = Apollo.QueryResult<GetChallangeQuery, GetChallangeQueryVariables>;
export const GetMeDocument = gql`
    query getMe {
  me {
    user {
      ...UserFields
    }
    profile {
      avatar
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;