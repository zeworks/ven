/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query Accounts {\n  accounts {\n    total\n    data {\n      id\n      username\n      email\n      status\n      profile {\n        firstName\n        lastName\n        picture\n      }\n      role {\n        id\n        name\n        key\n        status\n      }\n    }\n  }\n}\n\nmutation CreateAccount($input: CreateAccount) {\n  createAccount(input: $input) {\n    id\n    username\n    email\n    status\n    profile {\n      firstName\n      lastName\n      picture\n    }\n    role {\n      id\n      name\n      key\n      status\n    }\n  }\n}": types.AccountsDocument,
    "query Authentication {\n  me {\n    id\n    username\n    email\n    status\n    accessToken\n    profile {\n      firstName\n      lastName\n      picture\n    }\n    role {\n      id\n      name\n      key\n      status\n    }\n  }\n}\n\nmutation CreateAuthentication($email: String, $password: String) {\n  createAuthentication(email: $email, password: $password) {\n    accessToken\n  }\n}": types.AuthenticationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Accounts {\n  accounts {\n    total\n    data {\n      id\n      username\n      email\n      status\n      profile {\n        firstName\n        lastName\n        picture\n      }\n      role {\n        id\n        name\n        key\n        status\n      }\n    }\n  }\n}\n\nmutation CreateAccount($input: CreateAccount) {\n  createAccount(input: $input) {\n    id\n    username\n    email\n    status\n    profile {\n      firstName\n      lastName\n      picture\n    }\n    role {\n      id\n      name\n      key\n      status\n    }\n  }\n}"): (typeof documents)["query Accounts {\n  accounts {\n    total\n    data {\n      id\n      username\n      email\n      status\n      profile {\n        firstName\n        lastName\n        picture\n      }\n      role {\n        id\n        name\n        key\n        status\n      }\n    }\n  }\n}\n\nmutation CreateAccount($input: CreateAccount) {\n  createAccount(input: $input) {\n    id\n    username\n    email\n    status\n    profile {\n      firstName\n      lastName\n      picture\n    }\n    role {\n      id\n      name\n      key\n      status\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Authentication {\n  me {\n    id\n    username\n    email\n    status\n    accessToken\n    profile {\n      firstName\n      lastName\n      picture\n    }\n    role {\n      id\n      name\n      key\n      status\n    }\n  }\n}\n\nmutation CreateAuthentication($email: String, $password: String) {\n  createAuthentication(email: $email, password: $password) {\n    accessToken\n  }\n}"): (typeof documents)["query Authentication {\n  me {\n    id\n    username\n    email\n    status\n    accessToken\n    profile {\n      firstName\n      lastName\n      picture\n    }\n    role {\n      id\n      name\n      key\n      status\n    }\n  }\n}\n\nmutation CreateAuthentication($email: String, $password: String) {\n  createAuthentication(email: $email, password: $password) {\n    accessToken\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;