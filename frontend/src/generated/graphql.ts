/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "master_cards" */
export type MasterCards = {
  __typename?: 'master_cards';
  comment: Scalars['String'];
  /** An array relationship */
  user_active_cards: Array<UserActiveCards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: UserActiveCardsAggregate;
  value: Scalars['String'];
};


/** columns and relationships of "master_cards" */
export type MasterCardsUserActiveCardsArgs = {
  distinct_on?: InputMaybe<Array<UserActiveCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserActiveCardsOrderBy>>;
  where?: InputMaybe<UserActiveCardsBoolExp>;
};


/** columns and relationships of "master_cards" */
export type MasterCardsUserActiveCardsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserActiveCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserActiveCardsOrderBy>>;
  where?: InputMaybe<UserActiveCardsBoolExp>;
};

/** aggregated selection of "master_cards" */
export type MasterCardsAggregate = {
  __typename?: 'master_cards_aggregate';
  aggregate?: Maybe<MasterCardsAggregateFields>;
  nodes: Array<MasterCards>;
};

/** aggregate fields of "master_cards" */
export type MasterCardsAggregateFields = {
  __typename?: 'master_cards_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MasterCardsMaxFields>;
  min?: Maybe<MasterCardsMinFields>;
};


/** aggregate fields of "master_cards" */
export type MasterCardsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MasterCardsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "master_cards". All fields are combined with a logical 'AND'. */
export type MasterCardsBoolExp = {
  _and?: InputMaybe<Array<MasterCardsBoolExp>>;
  _not?: InputMaybe<MasterCardsBoolExp>;
  _or?: InputMaybe<Array<MasterCardsBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  user_active_cards?: InputMaybe<UserActiveCardsBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "master_cards" */
export const MasterCardsConstraint = {
  /** unique or primary key constraint */
  MasterCardsPkey: 'master_cards_pkey'
} as const;

export type MasterCardsConstraint = typeof MasterCardsConstraint[keyof typeof MasterCardsConstraint];
export const MasterCardsEnum = {
  /** 8 */
  Eight: 'EIGHT',
  /** 89 */
  EightyNine: 'EIGHTY_NINE',
  /** 55 */
  FiftyFive: 'FIFTY_FIVE',
  /** 5 */
  Five: 'FIVE',
  /** 1 */
  One: 'ONE',
  /** 13 */
  Thirteen: 'THIRTEEN',
  /** 34 */
  ThirtyFour: 'THIRTY_FOUR',
  /** 3 */
  Three: 'THREE',
  /** 21 */
  TwentyOne: 'TWENTY_ONE',
  /** 2 */
  Two: 'TWO'
} as const;

export type MasterCardsEnum = typeof MasterCardsEnum[keyof typeof MasterCardsEnum];
/** Boolean expression to compare columns of type "master_cards_enum". All fields are combined with logical 'AND'. */
export type MasterCardsEnumComparisonExp = {
  _eq?: InputMaybe<MasterCardsEnum>;
  _in?: InputMaybe<Array<MasterCardsEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<MasterCardsEnum>;
  _nin?: InputMaybe<Array<MasterCardsEnum>>;
};

/** input type for inserting data into table "master_cards" */
export type MasterCardsInsertInput = {
  comment?: InputMaybe<Scalars['String']>;
  user_active_cards?: InputMaybe<UserActiveCardsArrRelInsertInput>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type MasterCardsMaxFields = {
  __typename?: 'master_cards_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type MasterCardsMinFields = {
  __typename?: 'master_cards_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "master_cards" */
export type MasterCardsMutationResponse = {
  __typename?: 'master_cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MasterCards>;
};

/** input type for inserting object relation for remote table "master_cards" */
export type MasterCardsObjRelInsertInput = {
  data: MasterCardsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<MasterCardsOnConflict>;
};

/** on_conflict condition type for table "master_cards" */
export type MasterCardsOnConflict = {
  constraint: MasterCardsConstraint;
  update_columns?: Array<MasterCardsUpdateColumn>;
  where?: InputMaybe<MasterCardsBoolExp>;
};

/** Ordering options when selecting data from "master_cards". */
export type MasterCardsOrderBy = {
  comment?: InputMaybe<OrderBy>;
  user_active_cards_aggregate?: InputMaybe<UserActiveCardsAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: master_cards */
export type MasterCardsPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "master_cards" */
export const MasterCardsSelectColumn = {
  /** column name */
  Comment: 'comment',
  /** column name */
  Value: 'value'
} as const;

export type MasterCardsSelectColumn = typeof MasterCardsSelectColumn[keyof typeof MasterCardsSelectColumn];
/** input type for updating data in table "master_cards" */
export type MasterCardsSetInput = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "master_cards" */
export const MasterCardsUpdateColumn = {
  /** column name */
  Comment: 'comment',
  /** column name */
  Value: 'value'
} as const;

export type MasterCardsUpdateColumn = typeof MasterCardsUpdateColumn[keyof typeof MasterCardsUpdateColumn];
/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "master_cards" */
  delete_master_cards?: Maybe<MasterCardsMutationResponse>;
  /** delete single row from the table: "master_cards" */
  delete_master_cards_by_pk?: Maybe<MasterCards>;
  /** delete data from the table: "room_users" */
  delete_room_users?: Maybe<RoomUsersMutationResponse>;
  /** delete single row from the table: "room_users" */
  delete_room_users_by_pk?: Maybe<RoomUsers>;
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<RoomsMutationResponse>;
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>;
  /** delete data from the table: "user_active_cards" */
  delete_user_active_cards?: Maybe<UserActiveCardsMutationResponse>;
  /** delete single row from the table: "user_active_cards" */
  delete_user_active_cards_by_pk?: Maybe<UserActiveCards>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "master_cards" */
  insert_master_cards?: Maybe<MasterCardsMutationResponse>;
  /** insert a single row into the table: "master_cards" */
  insert_master_cards_one?: Maybe<MasterCards>;
  /** insert data into the table: "room_users" */
  insert_room_users?: Maybe<RoomUsersMutationResponse>;
  /** insert a single row into the table: "room_users" */
  insert_room_users_one?: Maybe<RoomUsers>;
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<RoomsMutationResponse>;
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>;
  /** insert data into the table: "user_active_cards" */
  insert_user_active_cards?: Maybe<UserActiveCardsMutationResponse>;
  /** insert a single row into the table: "user_active_cards" */
  insert_user_active_cards_one?: Maybe<UserActiveCards>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "master_cards" */
  update_master_cards?: Maybe<MasterCardsMutationResponse>;
  /** update single row of the table: "master_cards" */
  update_master_cards_by_pk?: Maybe<MasterCards>;
  /** update data of the table: "room_users" */
  update_room_users?: Maybe<RoomUsersMutationResponse>;
  /** update single row of the table: "room_users" */
  update_room_users_by_pk?: Maybe<RoomUsers>;
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<RoomsMutationResponse>;
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>;
  /** update data of the table: "user_active_cards" */
  update_user_active_cards?: Maybe<UserActiveCardsMutationResponse>;
  /** update single row of the table: "user_active_cards" */
  update_user_active_cards_by_pk?: Maybe<UserActiveCards>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type MutationRootDeleteMasterCardsArgs = {
  where: MasterCardsBoolExp;
};


/** mutation root */
export type MutationRootDeleteMasterCardsByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteRoomUsersArgs = {
  where: RoomUsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteRoomUsersByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteRoomsArgs = {
  where: RoomsBoolExp;
};


/** mutation root */
export type MutationRootDeleteRoomsByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteUserActiveCardsArgs = {
  where: UserActiveCardsBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserActiveCardsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootInsertMasterCardsArgs = {
  objects: Array<MasterCardsInsertInput>;
  on_conflict?: InputMaybe<MasterCardsOnConflict>;
};


/** mutation root */
export type MutationRootInsertMasterCardsOneArgs = {
  object: MasterCardsInsertInput;
  on_conflict?: InputMaybe<MasterCardsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRoomUsersArgs = {
  objects: Array<RoomUsersInsertInput>;
  on_conflict?: InputMaybe<RoomUsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertRoomUsersOneArgs = {
  object: RoomUsersInsertInput;
  on_conflict?: InputMaybe<RoomUsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertRoomsArgs = {
  objects: Array<RoomsInsertInput>;
  on_conflict?: InputMaybe<RoomsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRoomsOneArgs = {
  object: RoomsInsertInput;
  on_conflict?: InputMaybe<RoomsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserActiveCardsArgs = {
  objects: Array<UserActiveCardsInsertInput>;
  on_conflict?: InputMaybe<UserActiveCardsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserActiveCardsOneArgs = {
  object: UserActiveCardsInsertInput;
  on_conflict?: InputMaybe<UserActiveCardsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateMasterCardsArgs = {
  _set?: InputMaybe<MasterCardsSetInput>;
  where: MasterCardsBoolExp;
};


/** mutation root */
export type MutationRootUpdateMasterCardsByPkArgs = {
  _set?: InputMaybe<MasterCardsSetInput>;
  pk_columns: MasterCardsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRoomUsersArgs = {
  _set?: InputMaybe<RoomUsersSetInput>;
  where: RoomUsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateRoomUsersByPkArgs = {
  _set?: InputMaybe<RoomUsersSetInput>;
  pk_columns: RoomUsersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRoomsArgs = {
  _set?: InputMaybe<RoomsSetInput>;
  where: RoomsBoolExp;
};


/** mutation root */
export type MutationRootUpdateRoomsByPkArgs = {
  _set?: InputMaybe<RoomsSetInput>;
  pk_columns: RoomsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserActiveCardsArgs = {
  _inc?: InputMaybe<UserActiveCardsIncInput>;
  _set?: InputMaybe<UserActiveCardsSetInput>;
  where: UserActiveCardsBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserActiveCardsByPkArgs = {
  _inc?: InputMaybe<UserActiveCardsIncInput>;
  _set?: InputMaybe<UserActiveCardsSetInput>;
  pk_columns: UserActiveCardsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** column ordering options */
export const OrderBy = {
  /** in ascending order, nulls last */
  Asc: 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst: 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast: 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc: 'desc',
  /** in descending order, nulls first */
  DescNullsFirst: 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast: 'desc_nulls_last'
} as const;

export type OrderBy = typeof OrderBy[keyof typeof OrderBy];
export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "master_cards" */
  master_cards: Array<MasterCards>;
  /** fetch aggregated fields from the table: "master_cards" */
  master_cards_aggregate: MasterCardsAggregate;
  /** fetch data from the table: "master_cards" using primary key columns */
  master_cards_by_pk?: Maybe<MasterCards>;
  /** An array relationship */
  room_users: Array<RoomUsers>;
  /** An aggregate relationship */
  room_users_aggregate: RoomUsersAggregate;
  /** fetch data from the table: "room_users" using primary key columns */
  room_users_by_pk?: Maybe<RoomUsers>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: RoomsAggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** An array relationship */
  user_active_cards: Array<UserActiveCards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: UserActiveCardsAggregate;
  /** fetch data from the table: "user_active_cards" using primary key columns */
  user_active_cards_by_pk?: Maybe<UserActiveCards>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type QueryRootMasterCardsArgs = {
  distinct_on?: InputMaybe<Array<MasterCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MasterCardsOrderBy>>;
  where?: InputMaybe<MasterCardsBoolExp>;
};


export type QueryRootMasterCardsAggregateArgs = {
  distinct_on?: InputMaybe<Array<MasterCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MasterCardsOrderBy>>;
  where?: InputMaybe<MasterCardsBoolExp>;
};


export type QueryRootMasterCardsByPkArgs = {
  value: Scalars['String'];
};


export type QueryRootRoomUsersArgs = {
  distinct_on?: InputMaybe<Array<RoomUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomUsersOrderBy>>;
  where?: InputMaybe<RoomUsersBoolExp>;
};


export type QueryRootRoomUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<RoomUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomUsersOrderBy>>;
  where?: InputMaybe<RoomUsersBoolExp>;
};


export type QueryRootRoomUsersByPkArgs = {
  id: Scalars['String'];
};


export type QueryRootRoomsArgs = {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomsOrderBy>>;
  where?: InputMaybe<RoomsBoolExp>;
};


export type QueryRootRoomsAggregateArgs = {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomsOrderBy>>;
  where?: InputMaybe<RoomsBoolExp>;
};


export type QueryRootRoomsByPkArgs = {
  id: Scalars['String'];
};


export type QueryRootUserActiveCardsArgs = {
  distinct_on?: InputMaybe<Array<UserActiveCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserActiveCardsOrderBy>>;
  where?: InputMaybe<UserActiveCardsBoolExp>;
};


export type QueryRootUserActiveCardsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserActiveCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserActiveCardsOrderBy>>;
  where?: InputMaybe<UserActiveCardsBoolExp>;
};


export type QueryRootUserActiveCardsByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersByPkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "room_users" */
export type RoomUsers = {
  __typename?: 'room_users';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  /** An object relationship */
  room: Rooms;
  room_id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  /** An array relationship */
  user_active_cards: Array<UserActiveCards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: UserActiveCardsAggregate;
  user_id: Scalars['String'];
};


/** columns and relationships of "room_users" */
export type RoomUsersUserActiveCardsArgs = {
  distinct_on?: InputMaybe<Array<UserActiveCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserActiveCardsOrderBy>>;
  where?: InputMaybe<UserActiveCardsBoolExp>;
};


/** columns and relationships of "room_users" */
export type RoomUsersUserActiveCardsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserActiveCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserActiveCardsOrderBy>>;
  where?: InputMaybe<UserActiveCardsBoolExp>;
};

/** aggregated selection of "room_users" */
export type RoomUsersAggregate = {
  __typename?: 'room_users_aggregate';
  aggregate?: Maybe<RoomUsersAggregateFields>;
  nodes: Array<RoomUsers>;
};

/** aggregate fields of "room_users" */
export type RoomUsersAggregateFields = {
  __typename?: 'room_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<RoomUsersMaxFields>;
  min?: Maybe<RoomUsersMinFields>;
};


/** aggregate fields of "room_users" */
export type RoomUsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RoomUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "room_users" */
export type RoomUsersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RoomUsersMaxOrderBy>;
  min?: InputMaybe<RoomUsersMinOrderBy>;
};

/** input type for inserting array relation for remote table "room_users" */
export type RoomUsersArrRelInsertInput = {
  data: Array<RoomUsersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<RoomUsersOnConflict>;
};

/** Boolean expression to filter rows from the table "room_users". All fields are combined with a logical 'AND'. */
export type RoomUsersBoolExp = {
  _and?: InputMaybe<Array<RoomUsersBoolExp>>;
  _not?: InputMaybe<RoomUsersBoolExp>;
  _or?: InputMaybe<Array<RoomUsersBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  room?: InputMaybe<RoomsBoolExp>;
  room_id?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_active_cards?: InputMaybe<UserActiveCardsBoolExp>;
  user_id?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "room_users" */
export const RoomUsersConstraint = {
  /** unique or primary key constraint */
  RoomUsersPkey: 'room_users_pkey',
  /** unique or primary key constraint */
  RoomUsersUserIdRoomIdKey: 'room_users_user_id_room_id_key'
} as const;

export type RoomUsersConstraint = typeof RoomUsersConstraint[keyof typeof RoomUsersConstraint];
/** input type for inserting data into table "room_users" */
export type RoomUsersInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  room?: InputMaybe<RoomsObjRelInsertInput>;
  room_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_active_cards?: InputMaybe<UserActiveCardsArrRelInsertInput>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RoomUsersMaxFields = {
  __typename?: 'room_users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  room_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "room_users" */
export type RoomUsersMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RoomUsersMinFields = {
  __typename?: 'room_users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  room_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "room_users" */
export type RoomUsersMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  room_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "room_users" */
export type RoomUsersMutationResponse = {
  __typename?: 'room_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RoomUsers>;
};

/** input type for inserting object relation for remote table "room_users" */
export type RoomUsersObjRelInsertInput = {
  data: RoomUsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<RoomUsersOnConflict>;
};

/** on_conflict condition type for table "room_users" */
export type RoomUsersOnConflict = {
  constraint: RoomUsersConstraint;
  update_columns?: Array<RoomUsersUpdateColumn>;
  where?: InputMaybe<RoomUsersBoolExp>;
};

/** Ordering options when selecting data from "room_users". */
export type RoomUsersOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  room?: InputMaybe<RoomsOrderBy>;
  room_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_active_cards_aggregate?: InputMaybe<UserActiveCardsAggregateOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: room_users */
export type RoomUsersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "room_users" */
export const RoomUsersSelectColumn = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  RoomId: 'room_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type RoomUsersSelectColumn = typeof RoomUsersSelectColumn[keyof typeof RoomUsersSelectColumn];
/** input type for updating data in table "room_users" */
export type RoomUsersSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  room_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "room_users" */
export const RoomUsersUpdateColumn = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  RoomId: 'room_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id'
} as const;

export type RoomUsersUpdateColumn = typeof RoomUsersUpdateColumn[keyof typeof RoomUsersUpdateColumn];
/** columns and relationships of "rooms" */
export type Rooms = {
  __typename?: 'rooms';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  is_cards_open: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  room_users: Array<RoomUsers>;
  /** An aggregate relationship */
  room_users_aggregate: RoomUsersAggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "rooms" */
export type RoomsRoomUsersArgs = {
  distinct_on?: InputMaybe<Array<RoomUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomUsersOrderBy>>;
  where?: InputMaybe<RoomUsersBoolExp>;
};


/** columns and relationships of "rooms" */
export type RoomsRoomUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<RoomUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomUsersOrderBy>>;
  where?: InputMaybe<RoomUsersBoolExp>;
};

/** aggregated selection of "rooms" */
export type RoomsAggregate = {
  __typename?: 'rooms_aggregate';
  aggregate?: Maybe<RoomsAggregateFields>;
  nodes: Array<Rooms>;
};

/** aggregate fields of "rooms" */
export type RoomsAggregateFields = {
  __typename?: 'rooms_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<RoomsMaxFields>;
  min?: Maybe<RoomsMinFields>;
};


/** aggregate fields of "rooms" */
export type RoomsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RoomsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type RoomsBoolExp = {
  _and?: InputMaybe<Array<RoomsBoolExp>>;
  _not?: InputMaybe<RoomsBoolExp>;
  _or?: InputMaybe<Array<RoomsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  is_cards_open?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  room_users?: InputMaybe<RoomUsersBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "rooms" */
export const RoomsConstraint = {
  /** unique or primary key constraint */
  RoomsPkey: 'rooms_pkey'
} as const;

export type RoomsConstraint = typeof RoomsConstraint[keyof typeof RoomsConstraint];
/** input type for inserting data into table "rooms" */
export type RoomsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  is_cards_open?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  room_users?: InputMaybe<RoomUsersArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type RoomsMaxFields = {
  __typename?: 'rooms_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type RoomsMinFields = {
  __typename?: 'rooms_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rooms" */
export type RoomsMutationResponse = {
  __typename?: 'rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>;
};

/** input type for inserting object relation for remote table "rooms" */
export type RoomsObjRelInsertInput = {
  data: RoomsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<RoomsOnConflict>;
};

/** on_conflict condition type for table "rooms" */
export type RoomsOnConflict = {
  constraint: RoomsConstraint;
  update_columns?: Array<RoomsUpdateColumn>;
  where?: InputMaybe<RoomsBoolExp>;
};

/** Ordering options when selecting data from "rooms". */
export type RoomsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_cards_open?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  room_users_aggregate?: InputMaybe<RoomUsersAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: rooms */
export type RoomsPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "rooms" */
export const RoomsSelectColumn = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  IsCardsOpen: 'is_cards_open',
  /** column name */
  Name: 'name',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type RoomsSelectColumn = typeof RoomsSelectColumn[keyof typeof RoomsSelectColumn];
/** input type for updating data in table "rooms" */
export type RoomsSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  is_cards_open?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "rooms" */
export const RoomsUpdateColumn = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  IsCardsOpen: 'is_cards_open',
  /** column name */
  Name: 'name',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type RoomsUpdateColumn = typeof RoomsUpdateColumn[keyof typeof RoomsUpdateColumn];
export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "master_cards" */
  master_cards: Array<MasterCards>;
  /** fetch aggregated fields from the table: "master_cards" */
  master_cards_aggregate: MasterCardsAggregate;
  /** fetch data from the table: "master_cards" using primary key columns */
  master_cards_by_pk?: Maybe<MasterCards>;
  /** An array relationship */
  room_users: Array<RoomUsers>;
  /** An aggregate relationship */
  room_users_aggregate: RoomUsersAggregate;
  /** fetch data from the table: "room_users" using primary key columns */
  room_users_by_pk?: Maybe<RoomUsers>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: RoomsAggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** An array relationship */
  user_active_cards: Array<UserActiveCards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: UserActiveCardsAggregate;
  /** fetch data from the table: "user_active_cards" using primary key columns */
  user_active_cards_by_pk?: Maybe<UserActiveCards>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type SubscriptionRootMasterCardsArgs = {
  distinct_on?: InputMaybe<Array<MasterCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MasterCardsOrderBy>>;
  where?: InputMaybe<MasterCardsBoolExp>;
};


export type SubscriptionRootMasterCardsAggregateArgs = {
  distinct_on?: InputMaybe<Array<MasterCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MasterCardsOrderBy>>;
  where?: InputMaybe<MasterCardsBoolExp>;
};


export type SubscriptionRootMasterCardsByPkArgs = {
  value: Scalars['String'];
};


export type SubscriptionRootRoomUsersArgs = {
  distinct_on?: InputMaybe<Array<RoomUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomUsersOrderBy>>;
  where?: InputMaybe<RoomUsersBoolExp>;
};


export type SubscriptionRootRoomUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<RoomUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomUsersOrderBy>>;
  where?: InputMaybe<RoomUsersBoolExp>;
};


export type SubscriptionRootRoomUsersByPkArgs = {
  id: Scalars['String'];
};


export type SubscriptionRootRoomsArgs = {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomsOrderBy>>;
  where?: InputMaybe<RoomsBoolExp>;
};


export type SubscriptionRootRoomsAggregateArgs = {
  distinct_on?: InputMaybe<Array<RoomsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomsOrderBy>>;
  where?: InputMaybe<RoomsBoolExp>;
};


export type SubscriptionRootRoomsByPkArgs = {
  id: Scalars['String'];
};


export type SubscriptionRootUserActiveCardsArgs = {
  distinct_on?: InputMaybe<Array<UserActiveCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserActiveCardsOrderBy>>;
  where?: InputMaybe<UserActiveCardsBoolExp>;
};


export type SubscriptionRootUserActiveCardsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserActiveCardsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserActiveCardsOrderBy>>;
  where?: InputMaybe<UserActiveCardsBoolExp>;
};


export type SubscriptionRootUserActiveCardsByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_active_cards" */
export type UserActiveCards = {
  __typename?: 'user_active_cards';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  is_selected: Scalars['Boolean'];
  /** An object relationship */
  masterCardByMasterCard: MasterCards;
  master_card: MasterCardsEnum;
  /** An object relationship */
  room_user: RoomUsers;
  room_user_id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "user_active_cards" */
export type UserActiveCardsAggregate = {
  __typename?: 'user_active_cards_aggregate';
  aggregate?: Maybe<UserActiveCardsAggregateFields>;
  nodes: Array<UserActiveCards>;
};

/** aggregate fields of "user_active_cards" */
export type UserActiveCardsAggregateFields = {
  __typename?: 'user_active_cards_aggregate_fields';
  avg?: Maybe<UserActiveCardsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UserActiveCardsMaxFields>;
  min?: Maybe<UserActiveCardsMinFields>;
  stddev?: Maybe<UserActiveCardsStddevFields>;
  stddev_pop?: Maybe<UserActiveCardsStddevPopFields>;
  stddev_samp?: Maybe<UserActiveCardsStddevSampFields>;
  sum?: Maybe<UserActiveCardsSumFields>;
  var_pop?: Maybe<UserActiveCardsVarPopFields>;
  var_samp?: Maybe<UserActiveCardsVarSampFields>;
  variance?: Maybe<UserActiveCardsVarianceFields>;
};


/** aggregate fields of "user_active_cards" */
export type UserActiveCardsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserActiveCardsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_active_cards" */
export type UserActiveCardsAggregateOrderBy = {
  avg?: InputMaybe<UserActiveCardsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserActiveCardsMaxOrderBy>;
  min?: InputMaybe<UserActiveCardsMinOrderBy>;
  stddev?: InputMaybe<UserActiveCardsStddevOrderBy>;
  stddev_pop?: InputMaybe<UserActiveCardsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<UserActiveCardsStddevSampOrderBy>;
  sum?: InputMaybe<UserActiveCardsSumOrderBy>;
  var_pop?: InputMaybe<UserActiveCardsVarPopOrderBy>;
  var_samp?: InputMaybe<UserActiveCardsVarSampOrderBy>;
  variance?: InputMaybe<UserActiveCardsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "user_active_cards" */
export type UserActiveCardsArrRelInsertInput = {
  data: Array<UserActiveCardsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserActiveCardsOnConflict>;
};

/** aggregate avg on columns */
export type UserActiveCardsAvgFields = {
  __typename?: 'user_active_cards_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_active_cards" */
export type UserActiveCardsAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "user_active_cards". All fields are combined with a logical 'AND'. */
export type UserActiveCardsBoolExp = {
  _and?: InputMaybe<Array<UserActiveCardsBoolExp>>;
  _not?: InputMaybe<UserActiveCardsBoolExp>;
  _or?: InputMaybe<Array<UserActiveCardsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  is_selected?: InputMaybe<BooleanComparisonExp>;
  masterCardByMasterCard?: InputMaybe<MasterCardsBoolExp>;
  master_card?: InputMaybe<MasterCardsEnumComparisonExp>;
  room_user?: InputMaybe<RoomUsersBoolExp>;
  room_user_id?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "user_active_cards" */
export const UserActiveCardsConstraint = {
  /** unique or primary key constraint */
  UserActiveCardsPkey: 'user_active_cards_pkey'
} as const;

export type UserActiveCardsConstraint = typeof UserActiveCardsConstraint[keyof typeof UserActiveCardsConstraint];
/** input type for incrementing numeric columns in table "user_active_cards" */
export type UserActiveCardsIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_active_cards" */
export type UserActiveCardsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_selected?: InputMaybe<Scalars['Boolean']>;
  masterCardByMasterCard?: InputMaybe<MasterCardsObjRelInsertInput>;
  master_card?: InputMaybe<MasterCardsEnum>;
  room_user?: InputMaybe<RoomUsersObjRelInsertInput>;
  room_user_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UserActiveCardsMaxFields = {
  __typename?: 'user_active_cards_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  room_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user_active_cards" */
export type UserActiveCardsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  room_user_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserActiveCardsMinFields = {
  __typename?: 'user_active_cards_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  room_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user_active_cards" */
export type UserActiveCardsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  room_user_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_active_cards" */
export type UserActiveCardsMutationResponse = {
  __typename?: 'user_active_cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserActiveCards>;
};

/** on_conflict condition type for table "user_active_cards" */
export type UserActiveCardsOnConflict = {
  constraint: UserActiveCardsConstraint;
  update_columns?: Array<UserActiveCardsUpdateColumn>;
  where?: InputMaybe<UserActiveCardsBoolExp>;
};

/** Ordering options when selecting data from "user_active_cards". */
export type UserActiveCardsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_selected?: InputMaybe<OrderBy>;
  masterCardByMasterCard?: InputMaybe<MasterCardsOrderBy>;
  master_card?: InputMaybe<OrderBy>;
  room_user?: InputMaybe<RoomUsersOrderBy>;
  room_user_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_active_cards */
export type UserActiveCardsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "user_active_cards" */
export const UserActiveCardsSelectColumn = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  IsSelected: 'is_selected',
  /** column name */
  MasterCard: 'master_card',
  /** column name */
  RoomUserId: 'room_user_id',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type UserActiveCardsSelectColumn = typeof UserActiveCardsSelectColumn[keyof typeof UserActiveCardsSelectColumn];
/** input type for updating data in table "user_active_cards" */
export type UserActiveCardsSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_selected?: InputMaybe<Scalars['Boolean']>;
  master_card?: InputMaybe<MasterCardsEnum>;
  room_user_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type UserActiveCardsStddevFields = {
  __typename?: 'user_active_cards_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_active_cards" */
export type UserActiveCardsStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UserActiveCardsStddevPopFields = {
  __typename?: 'user_active_cards_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_active_cards" */
export type UserActiveCardsStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UserActiveCardsStddevSampFields = {
  __typename?: 'user_active_cards_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_active_cards" */
export type UserActiveCardsStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type UserActiveCardsSumFields = {
  __typename?: 'user_active_cards_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_active_cards" */
export type UserActiveCardsSumOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "user_active_cards" */
export const UserActiveCardsUpdateColumn = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  IsSelected: 'is_selected',
  /** column name */
  MasterCard: 'master_card',
  /** column name */
  RoomUserId: 'room_user_id',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type UserActiveCardsUpdateColumn = typeof UserActiveCardsUpdateColumn[keyof typeof UserActiveCardsUpdateColumn];
/** aggregate var_pop on columns */
export type UserActiveCardsVarPopFields = {
  __typename?: 'user_active_cards_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_active_cards" */
export type UserActiveCardsVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UserActiveCardsVarSampFields = {
  __typename?: 'user_active_cards_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_active_cards" */
export type UserActiveCardsVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UserActiveCardsVarianceFields = {
  __typename?: 'user_active_cards_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_active_cards" */
export type UserActiveCardsVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  /** An array relationship */
  room_users: Array<RoomUsers>;
  /** An aggregate relationship */
  room_users_aggregate: RoomUsersAggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersRoomUsersArgs = {
  distinct_on?: InputMaybe<Array<RoomUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomUsersOrderBy>>;
  where?: InputMaybe<RoomUsersBoolExp>;
};


/** columns and relationships of "users" */
export type UsersRoomUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<RoomUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoomUsersOrderBy>>;
  where?: InputMaybe<RoomUsersBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  last_seen?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  room_users?: InputMaybe<RoomUsersBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export const UsersConstraint = {
  /** unique or primary key constraint */
  UsersPkey: 'users_pkey'
} as const;

export type UsersConstraint = typeof UsersConstraint[keyof typeof UsersConstraint];
/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  room_users?: InputMaybe<RoomUsersArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  last_seen?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  room_users_aggregate?: InputMaybe<RoomUsersAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export const UsersSelectColumn = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  LastSeen: 'last_seen',
  /** column name */
  Name: 'name',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type UsersSelectColumn = typeof UsersSelectColumn[keyof typeof UsersSelectColumn];
/** input type for updating data in table "users" */
export type UsersSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export const UsersUpdateColumn = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  LastSeen: 'last_seen',
  /** column name */
  Name: 'name',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type UsersUpdateColumn = typeof UsersUpdateColumn[keyof typeof UsersUpdateColumn];
export type FetchUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FetchUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', name: string } | undefined };

export type CreateRoomMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateRoomMutation = { __typename?: 'mutation_root', insert_rooms?: { __typename?: 'rooms_mutation_response', returning: Array<{ __typename?: 'rooms', id: string }> } | undefined };

export type FetchDataQueryVariables = Exact<{
  roomID: Scalars['String'];
  userID: Scalars['String'];
}>;


export type FetchDataQuery = { __typename?: 'query_root', rooms_by_pk?: { __typename?: 'rooms', name: string } | undefined, master_cards: Array<{ __typename?: 'master_cards', value: string, comment: string }>, user_active_cards: Array<{ __typename?: 'user_active_cards', id: number }>, room_users: Array<{ __typename?: 'room_users', id: string }> };

export type UpdateRoomMutationVariables = Exact<{
  id: Scalars['String'];
  isCardsOpen: Scalars['Boolean'];
}>;


export type UpdateRoomMutation = { __typename?: 'mutation_root', update_rooms_by_pk?: { __typename?: 'rooms', is_cards_open: boolean } | undefined };

export type UpdateUserActiveCardsMutationVariables = Exact<{
  id: Scalars['Int'];
  isSelected: Scalars['Boolean'];
  masterCard: MasterCardsEnum;
}>;


export type UpdateUserActiveCardsMutation = { __typename?: 'mutation_root', update_user_active_cards_by_pk?: { __typename?: 'user_active_cards', id: number, master_card: MasterCardsEnum, is_selected: boolean } | undefined };

export type CreateRoomUserAndActiveCardMutationVariables = Exact<{
  roomID: Scalars['String'];
  userID: Scalars['String'];
  masterCard?: InputMaybe<MasterCardsEnum>;
}>;


export type CreateRoomUserAndActiveCardMutation = { __typename?: 'mutation_root', insert_room_users_one?: { __typename?: 'room_users', id: string } | undefined };

export type ResetUserActiveCardsMutationVariables = Exact<{
  roomID: Scalars['String'];
}>;


export type ResetUserActiveCardsMutation = { __typename?: 'mutation_root', update_rooms_by_pk?: { __typename?: 'rooms', is_cards_open: boolean } | undefined, update_user_active_cards?: { __typename?: 'user_active_cards_mutation_response', returning: Array<{ __typename?: 'user_active_cards', id: number }> } | undefined };

export type RoomSubscriptionSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type RoomSubscriptionSubscription = { __typename?: 'subscription_root', rooms_by_pk?: { __typename?: 'rooms', is_cards_open: boolean } | undefined };

export type UserActiveCardsSubscriptionSubscriptionVariables = Exact<{
  roomID: Scalars['String'];
}>;


export type UserActiveCardsSubscriptionSubscription = { __typename?: 'subscription_root', user_active_cards: Array<{ __typename?: 'user_active_cards', id: number, is_selected: boolean, masterCardByMasterCard: { __typename?: 'master_cards', value: string, comment: string }, room_user: { __typename?: 'room_users', user: { __typename?: 'users', id: string, name: string } } }> };

export type GetRoomsQueryVariables = Exact<{
  userID: Scalars['String'];
}>;


export type GetRoomsQuery = { __typename?: 'query_root', rooms: Array<{ __typename?: 'rooms', id: string, name: string }>, users_by_pk?: { __typename?: 'users', name: string } | undefined };


export const FetchUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FetchUserQuery, FetchUserQueryVariables>;
export const CreateRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_rooms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRoomMutation, CreateRoomMutationVariables>;
export const FetchDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rooms_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"master_cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_active_cards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"room_user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"room_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"room_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"room_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<FetchDataQuery, FetchDataQueryVariables>;
export const UpdateRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCardsOpen"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_rooms_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_cards_open"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCardsOpen"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"is_cards_open"}}]}}]}}]} as unknown as DocumentNode<UpdateRoomMutation, UpdateRoomMutationVariables>;
export const UpdateUserActiveCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserActiveCards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isSelected"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"masterCard"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"master_cards_enum"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_active_cards_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_selected"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isSelected"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"master_card"},"value":{"kind":"Variable","name":{"kind":"Name","value":"masterCard"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"master_card"}},{"kind":"Field","name":{"kind":"Name","value":"is_selected"}}]}}]}}]} as unknown as DocumentNode<UpdateUserActiveCardsMutation, UpdateUserActiveCardsMutationVariables>;
export const CreateRoomUserAndActiveCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRoomUserAndActiveCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"masterCard"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"master_cards_enum"}},"defaultValue":{"kind":"EnumValue","value":"ONE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_room_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"room_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_active_cards"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"master_card"},"value":{"kind":"Variable","name":{"kind":"Name","value":"masterCard"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRoomUserAndActiveCardMutation, CreateRoomUserAndActiveCardMutationVariables>;
export const ResetUserActiveCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetUserActiveCards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_rooms_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_cards_open"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"is_cards_open"}}]}},{"kind":"Field","name":{"kind":"Name","value":"update_user_active_cards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"room_user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"room_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_selected"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ResetUserActiveCardsMutation, ResetUserActiveCardsMutationVariables>;
export const RoomSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"roomSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rooms_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"is_cards_open"}}]}}]}}]} as unknown as DocumentNode<RoomSubscriptionSubscription, RoomSubscriptionSubscriptionVariables>;
export const UserActiveCardsSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"userActiveCardsSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_active_cards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"room_user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"room"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomID"}}}]}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_selected"}},{"kind":"Field","name":{"kind":"Name","value":"masterCardByMasterCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"room_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserActiveCardsSubscriptionSubscription, UserActiveCardsSubscriptionSubscriptionVariables>;
export const GetRoomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRooms"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rooms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"room_users"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetRoomsQuery, GetRoomsQueryVariables>;