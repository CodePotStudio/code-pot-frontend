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

export type Mutation = {
  __typename?: 'Mutation';
  registerRefundAccount: User;
  activateUser: User;
  logout?: Maybe<Scalars['Boolean']>;
  createAuthToken?: Maybe<AccessToken>;
  createUser: CreateUserResponse;
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

export type Profile = {
  __typename?: 'Profile';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Me>;
  user?: Maybe<User>;
};


export type QueryUserArgs = {
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