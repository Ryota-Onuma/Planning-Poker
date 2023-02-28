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
    "\n  query fetchUser($id: String!) {\n    users_by_pk(id: $id) {\n      name\n    }\n  }\n": types.FetchUserDocument,
    "\n  mutation createRoom($name: String!) {\n    insert_rooms(objects: { name: $name }) {\n      returning {\n        id\n      }\n    }\n  }\n": types.CreateRoomDocument,
    "\n  query fetchData($roomID: String!, $userID: String!) {\n    rooms_by_pk(id: $roomID) {\n      name\n    }\n    master_cards {\n      value\n      comment\n    }\n    user_active_cards(\n      limit: 1\n      where: {\n        room_user: { room_id: { _eq: $roomID }, user_id: { _eq: $userID } }\n      }\n    ) {\n      id\n    }\n    room_users(\n      limit: 1\n      where: { room_id: { _eq: $roomID }, user_id: { _eq: $userID } }\n    ) {\n      id\n    }\n  }\n": types.FetchDataDocument,
    "\n  mutation updateRoom($id: String!, $isCardsOpen: Boolean!) {\n    update_rooms_by_pk(\n      pk_columns: { id: $id }\n      _set: { is_cards_open: $isCardsOpen }\n    ) {\n      is_cards_open\n    }\n  }\n": types.UpdateRoomDocument,
    "\n  mutation updateUserActiveCards(\n    $id: Int!\n    $isSelected: Boolean!\n    $masterCard: master_cards_enum!\n  ) {\n    update_user_active_cards_by_pk(\n      pk_columns: { id: $id }\n      _set: { is_selected: $isSelected, master_card: $masterCard }\n    ) {\n      id\n      master_card\n      is_selected\n    }\n  }\n": types.UpdateUserActiveCardsDocument,
    "\n  mutation createRoomUserAndActiveCard(\n    $roomID: String!\n    $userID: String!\n    $masterCard: master_cards_enum = ONE\n  ) {\n    insert_room_users_one(\n      object: {\n        user_id: $userID\n        room_id: $roomID\n        user_active_cards: { data: { master_card: $masterCard } }\n      }\n    ) {\n      id\n    }\n  }\n": types.CreateRoomUserAndActiveCardDocument,
    "\n  mutation resetUserActiveCards($roomID: String!) {\n    update_rooms_by_pk(\n      pk_columns: { id: $roomID }\n      _set: { is_cards_open: false }\n    ) {\n      is_cards_open\n    }\n\n    update_user_active_cards(\n      where: { room_user: { room_id: { _eq: $roomID } } }\n      _set: { is_selected: false }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n": types.ResetUserActiveCardsDocument,
    "\n  subscription roomSubscription($id: String!) {\n    rooms_by_pk(id: $id) {\n      is_cards_open\n    }\n  }\n": types.RoomSubscriptionDocument,
    "\n  subscription userActiveCardsSubscription($roomID: String!) {\n    user_active_cards(\n      where: { room_user: { room: { id: { _eq: $roomID } } } }\n      order_by: { id: asc }\n    ) {\n      id\n      is_selected\n      masterCardByMasterCard {\n        value\n        comment\n      }\n      room_user {\n        user {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.UserActiveCardsSubscriptionDocument,
    "\n  query getRooms($userID: String!) {\n    rooms(\n      where: { room_users: { user_id: { _eq: $userID } } }\n      order_by: { created_at: desc }\n    ) {\n      id\n      name\n    }\n    users_by_pk(id: $userID) {\n      name\n    }\n  }\n": types.GetRoomsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query fetchUser($id: String!) {\n    users_by_pk(id: $id) {\n      name\n    }\n  }\n"): (typeof documents)["\n  query fetchUser($id: String!) {\n    users_by_pk(id: $id) {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createRoom($name: String!) {\n    insert_rooms(objects: { name: $name }) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createRoom($name: String!) {\n    insert_rooms(objects: { name: $name }) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query fetchData($roomID: String!, $userID: String!) {\n    rooms_by_pk(id: $roomID) {\n      name\n    }\n    master_cards {\n      value\n      comment\n    }\n    user_active_cards(\n      limit: 1\n      where: {\n        room_user: { room_id: { _eq: $roomID }, user_id: { _eq: $userID } }\n      }\n    ) {\n      id\n    }\n    room_users(\n      limit: 1\n      where: { room_id: { _eq: $roomID }, user_id: { _eq: $userID } }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query fetchData($roomID: String!, $userID: String!) {\n    rooms_by_pk(id: $roomID) {\n      name\n    }\n    master_cards {\n      value\n      comment\n    }\n    user_active_cards(\n      limit: 1\n      where: {\n        room_user: { room_id: { _eq: $roomID }, user_id: { _eq: $userID } }\n      }\n    ) {\n      id\n    }\n    room_users(\n      limit: 1\n      where: { room_id: { _eq: $roomID }, user_id: { _eq: $userID } }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateRoom($id: String!, $isCardsOpen: Boolean!) {\n    update_rooms_by_pk(\n      pk_columns: { id: $id }\n      _set: { is_cards_open: $isCardsOpen }\n    ) {\n      is_cards_open\n    }\n  }\n"): (typeof documents)["\n  mutation updateRoom($id: String!, $isCardsOpen: Boolean!) {\n    update_rooms_by_pk(\n      pk_columns: { id: $id }\n      _set: { is_cards_open: $isCardsOpen }\n    ) {\n      is_cards_open\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateUserActiveCards(\n    $id: Int!\n    $isSelected: Boolean!\n    $masterCard: master_cards_enum!\n  ) {\n    update_user_active_cards_by_pk(\n      pk_columns: { id: $id }\n      _set: { is_selected: $isSelected, master_card: $masterCard }\n    ) {\n      id\n      master_card\n      is_selected\n    }\n  }\n"): (typeof documents)["\n  mutation updateUserActiveCards(\n    $id: Int!\n    $isSelected: Boolean!\n    $masterCard: master_cards_enum!\n  ) {\n    update_user_active_cards_by_pk(\n      pk_columns: { id: $id }\n      _set: { is_selected: $isSelected, master_card: $masterCard }\n    ) {\n      id\n      master_card\n      is_selected\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createRoomUserAndActiveCard(\n    $roomID: String!\n    $userID: String!\n    $masterCard: master_cards_enum = ONE\n  ) {\n    insert_room_users_one(\n      object: {\n        user_id: $userID\n        room_id: $roomID\n        user_active_cards: { data: { master_card: $masterCard } }\n      }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation createRoomUserAndActiveCard(\n    $roomID: String!\n    $userID: String!\n    $masterCard: master_cards_enum = ONE\n  ) {\n    insert_room_users_one(\n      object: {\n        user_id: $userID\n        room_id: $roomID\n        user_active_cards: { data: { master_card: $masterCard } }\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation resetUserActiveCards($roomID: String!) {\n    update_rooms_by_pk(\n      pk_columns: { id: $roomID }\n      _set: { is_cards_open: false }\n    ) {\n      is_cards_open\n    }\n\n    update_user_active_cards(\n      where: { room_user: { room_id: { _eq: $roomID } } }\n      _set: { is_selected: false }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation resetUserActiveCards($roomID: String!) {\n    update_rooms_by_pk(\n      pk_columns: { id: $roomID }\n      _set: { is_cards_open: false }\n    ) {\n      is_cards_open\n    }\n\n    update_user_active_cards(\n      where: { room_user: { room_id: { _eq: $roomID } } }\n      _set: { is_selected: false }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription roomSubscription($id: String!) {\n    rooms_by_pk(id: $id) {\n      is_cards_open\n    }\n  }\n"): (typeof documents)["\n  subscription roomSubscription($id: String!) {\n    rooms_by_pk(id: $id) {\n      is_cards_open\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription userActiveCardsSubscription($roomID: String!) {\n    user_active_cards(\n      where: { room_user: { room: { id: { _eq: $roomID } } } }\n      order_by: { id: asc }\n    ) {\n      id\n      is_selected\n      masterCardByMasterCard {\n        value\n        comment\n      }\n      room_user {\n        user {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription userActiveCardsSubscription($roomID: String!) {\n    user_active_cards(\n      where: { room_user: { room: { id: { _eq: $roomID } } } }\n      order_by: { id: asc }\n    ) {\n      id\n      is_selected\n      masterCardByMasterCard {\n        value\n        comment\n      }\n      room_user {\n        user {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getRooms($userID: String!) {\n    rooms(\n      where: { room_users: { user_id: { _eq: $userID } } }\n      order_by: { created_at: desc }\n    ) {\n      id\n      name\n    }\n    users_by_pk(id: $userID) {\n      name\n    }\n  }\n"): (typeof documents)["\n  query getRooms($userID: String!) {\n    rooms(\n      where: { room_users: { user_id: { _eq: $userID } } }\n      order_by: { created_at: desc }\n    ) {\n      id\n      name\n    }\n    users_by_pk(id: $userID) {\n      name\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;