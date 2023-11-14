/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Authentication = {
  __typename?: 'Authentication';
  accessToken: Scalars['String']['output'];
};

export type ClientId = {
  id: Scalars['String']['input'];
};

export type CreateAccount = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  profile: CreateUserProfileInput;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};

export type CreateRoleInput = {
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Array<InputMaybe<PermissionInput>>>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateUserProfileInput = {
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['String']['output']>;
  createAccount?: Maybe<User>;
  createAuthentication?: Maybe<Authentication>;
  createRole?: Maybe<Role>;
  deleteAccount?: Maybe<Scalars['Boolean']['output']>;
  deleteAuthentication?: Maybe<Scalars['Boolean']['output']>;
  updateAccount?: Maybe<User>;
};


export type MutationCreateAccountArgs = {
  input?: InputMaybe<CreateAccount>;
};


export type MutationCreateAuthenticationArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationDeleteAccountArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateAccountArgs = {
  id: Scalars['String']['input'];
  input: UpdateAccountInput;
};

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
};

export type PermissionInput = {
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']['output']>;
  account?: Maybe<User>;
  accounts?: Maybe<UsersDatatable>;
  me?: Maybe<User>;
};


export type QueryAccountArgs = {
  id: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Maybe<Permission>>>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateAccountInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<UpdateUserProfileInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserProfileInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  accessToken?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  profile?: Maybe<UserProfile>;
  role?: Maybe<Role>;
  status?: Maybe<Scalars['Boolean']['output']>;
  username: Scalars['String']['output'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  firstName: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
};

export type UsersDatatable = {
  __typename?: 'UsersDatatable';
  data?: Maybe<Array<Maybe<User>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountsQuery = { __typename?: 'Query', accounts?: { __typename?: 'UsersDatatable', total?: number | null, data?: Array<{ __typename?: 'User', id: string, email: string, username: string, status?: boolean | null } | null> | null } | null };


export const AccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<AccountsQuery, AccountsQueryVariables>;