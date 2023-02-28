/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
export type Boolean_Comparison_Exp = {
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
export type Int_Comparison_Exp = {
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
export type String_Comparison_Exp = {
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
export type Master_Cards = {
  __typename?: 'master_cards';
  comment: Scalars['String'];
  /** An array relationship */
  user_active_cards: Array<User_Active_Cards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: User_Active_Cards_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "master_cards" */
export type Master_CardsUser_Active_CardsArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


/** columns and relationships of "master_cards" */
export type Master_CardsUser_Active_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};

/** aggregated selection of "master_cards" */
export type Master_Cards_Aggregate = {
  __typename?: 'master_cards_aggregate';
  aggregate?: Maybe<Master_Cards_Aggregate_Fields>;
  nodes: Array<Master_Cards>;
};

/** aggregate fields of "master_cards" */
export type Master_Cards_Aggregate_Fields = {
  __typename?: 'master_cards_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Master_Cards_Max_Fields>;
  min?: Maybe<Master_Cards_Min_Fields>;
};


/** aggregate fields of "master_cards" */
export type Master_Cards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Master_Cards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "master_cards". All fields are combined with a logical 'AND'. */
export type Master_Cards_Bool_Exp = {
  _and?: InputMaybe<Array<Master_Cards_Bool_Exp>>;
  _not?: InputMaybe<Master_Cards_Bool_Exp>;
  _or?: InputMaybe<Array<Master_Cards_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  user_active_cards?: InputMaybe<User_Active_Cards_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "master_cards" */
export enum Master_Cards_Constraint {
  /** unique or primary key constraint */
  MasterCardsPkey = 'master_cards_pkey'
}

export enum Master_Cards_Enum {
  /** 8 */
  Eight = 'EIGHT',
  /** 89 */
  EightyNine = 'EIGHTY_NINE',
  /** 55 */
  FiftyFive = 'FIFTY_FIVE',
  /** 5 */
  Five = 'FIVE',
  /** 1 */
  One = 'ONE',
  /** 13 */
  Thirteen = 'THIRTEEN',
  /** 34 */
  ThirtyFour = 'THIRTY_FOUR',
  /** 3 */
  Three = 'THREE',
  /** 21 */
  TwentyOne = 'TWENTY_ONE',
  /** 2 */
  Two = 'TWO'
}

/** Boolean expression to compare columns of type "master_cards_enum". All fields are combined with logical 'AND'. */
export type Master_Cards_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Master_Cards_Enum>;
  _in?: InputMaybe<Array<Master_Cards_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Master_Cards_Enum>;
  _nin?: InputMaybe<Array<Master_Cards_Enum>>;
};

/** input type for inserting data into table "master_cards" */
export type Master_Cards_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  user_active_cards?: InputMaybe<User_Active_Cards_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Master_Cards_Max_Fields = {
  __typename?: 'master_cards_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Master_Cards_Min_Fields = {
  __typename?: 'master_cards_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "master_cards" */
export type Master_Cards_Mutation_Response = {
  __typename?: 'master_cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Master_Cards>;
};

/** input type for inserting object relation for remote table "master_cards" */
export type Master_Cards_Obj_Rel_Insert_Input = {
  data: Master_Cards_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Master_Cards_On_Conflict>;
};

/** on_conflict condition type for table "master_cards" */
export type Master_Cards_On_Conflict = {
  constraint: Master_Cards_Constraint;
  update_columns?: Array<Master_Cards_Update_Column>;
  where?: InputMaybe<Master_Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "master_cards". */
export type Master_Cards_Order_By = {
  comment?: InputMaybe<Order_By>;
  user_active_cards_aggregate?: InputMaybe<User_Active_Cards_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: master_cards */
export type Master_Cards_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "master_cards" */
export enum Master_Cards_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "master_cards" */
export type Master_Cards_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "master_cards" */
export enum Master_Cards_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "master_cards" */
  delete_master_cards?: Maybe<Master_Cards_Mutation_Response>;
  /** delete single row from the table: "master_cards" */
  delete_master_cards_by_pk?: Maybe<Master_Cards>;
  /** delete data from the table: "room_users" */
  delete_room_users?: Maybe<Room_Users_Mutation_Response>;
  /** delete single row from the table: "room_users" */
  delete_room_users_by_pk?: Maybe<Room_Users>;
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<Rooms_Mutation_Response>;
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>;
  /** delete data from the table: "user_active_cards" */
  delete_user_active_cards?: Maybe<User_Active_Cards_Mutation_Response>;
  /** delete single row from the table: "user_active_cards" */
  delete_user_active_cards_by_pk?: Maybe<User_Active_Cards>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "master_cards" */
  insert_master_cards?: Maybe<Master_Cards_Mutation_Response>;
  /** insert a single row into the table: "master_cards" */
  insert_master_cards_one?: Maybe<Master_Cards>;
  /** insert data into the table: "room_users" */
  insert_room_users?: Maybe<Room_Users_Mutation_Response>;
  /** insert a single row into the table: "room_users" */
  insert_room_users_one?: Maybe<Room_Users>;
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<Rooms_Mutation_Response>;
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>;
  /** insert data into the table: "user_active_cards" */
  insert_user_active_cards?: Maybe<User_Active_Cards_Mutation_Response>;
  /** insert a single row into the table: "user_active_cards" */
  insert_user_active_cards_one?: Maybe<User_Active_Cards>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "master_cards" */
  update_master_cards?: Maybe<Master_Cards_Mutation_Response>;
  /** update single row of the table: "master_cards" */
  update_master_cards_by_pk?: Maybe<Master_Cards>;
  /** update data of the table: "room_users" */
  update_room_users?: Maybe<Room_Users_Mutation_Response>;
  /** update single row of the table: "room_users" */
  update_room_users_by_pk?: Maybe<Room_Users>;
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<Rooms_Mutation_Response>;
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>;
  /** update data of the table: "user_active_cards" */
  update_user_active_cards?: Maybe<User_Active_Cards_Mutation_Response>;
  /** update single row of the table: "user_active_cards" */
  update_user_active_cards_by_pk?: Maybe<User_Active_Cards>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Master_CardsArgs = {
  where: Master_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Master_Cards_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Room_UsersArgs = {
  where: Room_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RoomsArgs = {
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rooms_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_Active_CardsArgs = {
  where: User_Active_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Active_Cards_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Master_CardsArgs = {
  objects: Array<Master_Cards_Insert_Input>;
  on_conflict?: InputMaybe<Master_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_Cards_OneArgs = {
  object: Master_Cards_Insert_Input;
  on_conflict?: InputMaybe<Master_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_UsersArgs = {
  objects: Array<Room_Users_Insert_Input>;
  on_conflict?: InputMaybe<Room_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_Users_OneArgs = {
  object: Room_Users_Insert_Input;
  on_conflict?: InputMaybe<Room_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomsArgs = {
  objects: Array<Rooms_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rooms_OneArgs = {
  object: Rooms_Insert_Input;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Active_CardsArgs = {
  objects: Array<User_Active_Cards_Insert_Input>;
  on_conflict?: InputMaybe<User_Active_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Active_Cards_OneArgs = {
  object: User_Active_Cards_Insert_Input;
  on_conflict?: InputMaybe<User_Active_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Master_CardsArgs = {
  _set?: InputMaybe<Master_Cards_Set_Input>;
  where: Master_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Master_Cards_By_PkArgs = {
  _set?: InputMaybe<Master_Cards_Set_Input>;
  pk_columns: Master_Cards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Room_UsersArgs = {
  _set?: InputMaybe<Room_Users_Set_Input>;
  where: Room_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Users_By_PkArgs = {
  _set?: InputMaybe<Room_Users_Set_Input>;
  pk_columns: Room_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoomsArgs = {
  _set?: InputMaybe<Rooms_Set_Input>;
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rooms_By_PkArgs = {
  _set?: InputMaybe<Rooms_Set_Input>;
  pk_columns: Rooms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Active_CardsArgs = {
  _inc?: InputMaybe<User_Active_Cards_Inc_Input>;
  _set?: InputMaybe<User_Active_Cards_Set_Input>;
  where: User_Active_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Active_Cards_By_PkArgs = {
  _inc?: InputMaybe<User_Active_Cards_Inc_Input>;
  _set?: InputMaybe<User_Active_Cards_Set_Input>;
  pk_columns: User_Active_Cards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "master_cards" */
  master_cards: Array<Master_Cards>;
  /** fetch aggregated fields from the table: "master_cards" */
  master_cards_aggregate: Master_Cards_Aggregate;
  /** fetch data from the table: "master_cards" using primary key columns */
  master_cards_by_pk?: Maybe<Master_Cards>;
  /** An array relationship */
  room_users: Array<Room_Users>;
  /** An aggregate relationship */
  room_users_aggregate: Room_Users_Aggregate;
  /** fetch data from the table: "room_users" using primary key columns */
  room_users_by_pk?: Maybe<Room_Users>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** An array relationship */
  user_active_cards: Array<User_Active_Cards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: User_Active_Cards_Aggregate;
  /** fetch data from the table: "user_active_cards" using primary key columns */
  user_active_cards_by_pk?: Maybe<User_Active_Cards>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootMaster_CardsArgs = {
  distinct_on?: InputMaybe<Array<Master_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Master_Cards_Order_By>>;
  where?: InputMaybe<Master_Cards_Bool_Exp>;
};


export type Query_RootMaster_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Master_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Master_Cards_Order_By>>;
  where?: InputMaybe<Master_Cards_Bool_Exp>;
};


export type Query_RootMaster_Cards_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootRoom_UsersArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


export type Query_RootRoom_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


export type Query_RootRoom_Users_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUser_Active_CardsArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


export type Query_RootUser_Active_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


export type Query_RootUser_Active_Cards_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "room_users" */
export type Room_Users = {
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
  user_active_cards: Array<User_Active_Cards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: User_Active_Cards_Aggregate;
  user_id: Scalars['String'];
};


/** columns and relationships of "room_users" */
export type Room_UsersUser_Active_CardsArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


/** columns and relationships of "room_users" */
export type Room_UsersUser_Active_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};

/** aggregated selection of "room_users" */
export type Room_Users_Aggregate = {
  __typename?: 'room_users_aggregate';
  aggregate?: Maybe<Room_Users_Aggregate_Fields>;
  nodes: Array<Room_Users>;
};

/** aggregate fields of "room_users" */
export type Room_Users_Aggregate_Fields = {
  __typename?: 'room_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Room_Users_Max_Fields>;
  min?: Maybe<Room_Users_Min_Fields>;
};


/** aggregate fields of "room_users" */
export type Room_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Room_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "room_users" */
export type Room_Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Room_Users_Max_Order_By>;
  min?: InputMaybe<Room_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "room_users" */
export type Room_Users_Arr_Rel_Insert_Input = {
  data: Array<Room_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Room_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "room_users". All fields are combined with a logical 'AND'. */
export type Room_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Room_Users_Bool_Exp>>;
  _not?: InputMaybe<Room_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Room_Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  room_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_active_cards?: InputMaybe<User_Active_Cards_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "room_users" */
export enum Room_Users_Constraint {
  /** unique or primary key constraint */
  RoomUsersPkey = 'room_users_pkey',
  /** unique or primary key constraint */
  RoomUsersUserIdRoomIdKey = 'room_users_user_id_room_id_key'
}

/** input type for inserting data into table "room_users" */
export type Room_Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  room_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_active_cards?: InputMaybe<User_Active_Cards_Arr_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Room_Users_Max_Fields = {
  __typename?: 'room_users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  room_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "room_users" */
export type Room_Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Users_Min_Fields = {
  __typename?: 'room_users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  room_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "room_users" */
export type Room_Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "room_users" */
export type Room_Users_Mutation_Response = {
  __typename?: 'room_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Room_Users>;
};

/** input type for inserting object relation for remote table "room_users" */
export type Room_Users_Obj_Rel_Insert_Input = {
  data: Room_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Room_Users_On_Conflict>;
};

/** on_conflict condition type for table "room_users" */
export type Room_Users_On_Conflict = {
  constraint: Room_Users_Constraint;
  update_columns?: Array<Room_Users_Update_Column>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "room_users". */
export type Room_Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_active_cards_aggregate?: InputMaybe<User_Active_Cards_Aggregate_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: room_users */
export type Room_Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "room_users" */
export enum Room_Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "room_users" */
export type Room_Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  room_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "room_users" */
export enum Room_Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "rooms" */
export type Rooms = {
  __typename?: 'rooms';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  is_cards_open: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  room_users: Array<Room_Users>;
  /** An aggregate relationship */
  room_users_aggregate: Room_Users_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "rooms" */
export type RoomsRoom_UsersArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


/** columns and relationships of "rooms" */
export type RoomsRoom_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};

/** aggregated selection of "rooms" */
export type Rooms_Aggregate = {
  __typename?: 'rooms_aggregate';
  aggregate?: Maybe<Rooms_Aggregate_Fields>;
  nodes: Array<Rooms>;
};

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_Fields = {
  __typename?: 'rooms_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rooms_Max_Fields>;
  min?: Maybe<Rooms_Min_Fields>;
};


/** aggregate fields of "rooms" */
export type Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_cards_open?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  room_users?: InputMaybe<Room_Users_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rooms" */
export enum Rooms_Constraint {
  /** unique or primary key constraint */
  RoomsPkey = 'rooms_pkey'
}

/** input type for inserting data into table "rooms" */
export type Rooms_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  is_cards_open?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  room_users?: InputMaybe<Room_Users_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rooms_Max_Fields = {
  __typename?: 'rooms_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rooms_Min_Fields = {
  __typename?: 'rooms_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rooms" */
export type Rooms_Mutation_Response = {
  __typename?: 'rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>;
};

/** input type for inserting object relation for remote table "rooms" */
export type Rooms_Obj_Rel_Insert_Input = {
  data: Rooms_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};

/** on_conflict condition type for table "rooms" */
export type Rooms_On_Conflict = {
  constraint: Rooms_Constraint;
  update_columns?: Array<Rooms_Update_Column>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms". */
export type Rooms_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_cards_open?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  room_users_aggregate?: InputMaybe<Room_Users_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rooms */
export type Rooms_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "rooms" */
export enum Rooms_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCardsOpen = 'is_cards_open',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rooms" */
export type Rooms_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  is_cards_open?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "rooms" */
export enum Rooms_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCardsOpen = 'is_cards_open',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "master_cards" */
  master_cards: Array<Master_Cards>;
  /** fetch aggregated fields from the table: "master_cards" */
  master_cards_aggregate: Master_Cards_Aggregate;
  /** fetch data from the table: "master_cards" using primary key columns */
  master_cards_by_pk?: Maybe<Master_Cards>;
  /** An array relationship */
  room_users: Array<Room_Users>;
  /** An aggregate relationship */
  room_users_aggregate: Room_Users_Aggregate;
  /** fetch data from the table: "room_users" using primary key columns */
  room_users_by_pk?: Maybe<Room_Users>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** An array relationship */
  user_active_cards: Array<User_Active_Cards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: User_Active_Cards_Aggregate;
  /** fetch data from the table: "user_active_cards" using primary key columns */
  user_active_cards_by_pk?: Maybe<User_Active_Cards>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootMaster_CardsArgs = {
  distinct_on?: InputMaybe<Array<Master_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Master_Cards_Order_By>>;
  where?: InputMaybe<Master_Cards_Bool_Exp>;
};


export type Subscription_RootMaster_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Master_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Master_Cards_Order_By>>;
  where?: InputMaybe<Master_Cards_Bool_Exp>;
};


export type Subscription_RootMaster_Cards_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootRoom_UsersArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


export type Subscription_RootRoom_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


export type Subscription_RootRoom_Users_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUser_Active_CardsArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


export type Subscription_RootUser_Active_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


export type Subscription_RootUser_Active_Cards_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
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
export type User_Active_Cards = {
  __typename?: 'user_active_cards';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  is_selected: Scalars['Boolean'];
  /** An object relationship */
  masterCardByMasterCard: Master_Cards;
  master_card: Master_Cards_Enum;
  /** An object relationship */
  room_user: Room_Users;
  room_user_id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "user_active_cards" */
export type User_Active_Cards_Aggregate = {
  __typename?: 'user_active_cards_aggregate';
  aggregate?: Maybe<User_Active_Cards_Aggregate_Fields>;
  nodes: Array<User_Active_Cards>;
};

/** aggregate fields of "user_active_cards" */
export type User_Active_Cards_Aggregate_Fields = {
  __typename?: 'user_active_cards_aggregate_fields';
  avg?: Maybe<User_Active_Cards_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Active_Cards_Max_Fields>;
  min?: Maybe<User_Active_Cards_Min_Fields>;
  stddev?: Maybe<User_Active_Cards_Stddev_Fields>;
  stddev_pop?: Maybe<User_Active_Cards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Active_Cards_Stddev_Samp_Fields>;
  sum?: Maybe<User_Active_Cards_Sum_Fields>;
  var_pop?: Maybe<User_Active_Cards_Var_Pop_Fields>;
  var_samp?: Maybe<User_Active_Cards_Var_Samp_Fields>;
  variance?: Maybe<User_Active_Cards_Variance_Fields>;
};


/** aggregate fields of "user_active_cards" */
export type User_Active_Cards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_active_cards" */
export type User_Active_Cards_Aggregate_Order_By = {
  avg?: InputMaybe<User_Active_Cards_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Active_Cards_Max_Order_By>;
  min?: InputMaybe<User_Active_Cards_Min_Order_By>;
  stddev?: InputMaybe<User_Active_Cards_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Active_Cards_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Active_Cards_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Active_Cards_Sum_Order_By>;
  var_pop?: InputMaybe<User_Active_Cards_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Active_Cards_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Active_Cards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_active_cards" */
export type User_Active_Cards_Arr_Rel_Insert_Input = {
  data: Array<User_Active_Cards_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Active_Cards_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Active_Cards_Avg_Fields = {
  __typename?: 'user_active_cards_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_active_cards" */
export type User_Active_Cards_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_active_cards". All fields are combined with a logical 'AND'. */
export type User_Active_Cards_Bool_Exp = {
  _and?: InputMaybe<Array<User_Active_Cards_Bool_Exp>>;
  _not?: InputMaybe<User_Active_Cards_Bool_Exp>;
  _or?: InputMaybe<Array<User_Active_Cards_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  masterCardByMasterCard?: InputMaybe<Master_Cards_Bool_Exp>;
  master_card?: InputMaybe<Master_Cards_Enum_Comparison_Exp>;
  room_user?: InputMaybe<Room_Users_Bool_Exp>;
  room_user_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_active_cards" */
export enum User_Active_Cards_Constraint {
  /** unique or primary key constraint */
  UserActiveCardsPkey = 'user_active_cards_pkey'
}

/** input type for incrementing numeric columns in table "user_active_cards" */
export type User_Active_Cards_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_active_cards" */
export type User_Active_Cards_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_selected?: InputMaybe<Scalars['Boolean']>;
  masterCardByMasterCard?: InputMaybe<Master_Cards_Obj_Rel_Insert_Input>;
  master_card?: InputMaybe<Master_Cards_Enum>;
  room_user?: InputMaybe<Room_Users_Obj_Rel_Insert_Input>;
  room_user_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Active_Cards_Max_Fields = {
  __typename?: 'user_active_cards_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  room_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user_active_cards" */
export type User_Active_Cards_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Active_Cards_Min_Fields = {
  __typename?: 'user_active_cards_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  room_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user_active_cards" */
export type User_Active_Cards_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_active_cards" */
export type User_Active_Cards_Mutation_Response = {
  __typename?: 'user_active_cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Active_Cards>;
};

/** on_conflict condition type for table "user_active_cards" */
export type User_Active_Cards_On_Conflict = {
  constraint: User_Active_Cards_Constraint;
  update_columns?: Array<User_Active_Cards_Update_Column>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "user_active_cards". */
export type User_Active_Cards_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_selected?: InputMaybe<Order_By>;
  masterCardByMasterCard?: InputMaybe<Master_Cards_Order_By>;
  master_card?: InputMaybe<Order_By>;
  room_user?: InputMaybe<Room_Users_Order_By>;
  room_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_active_cards */
export type User_Active_Cards_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_active_cards" */
export enum User_Active_Cards_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsSelected = 'is_selected',
  /** column name */
  MasterCard = 'master_card',
  /** column name */
  RoomUserId = 'room_user_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user_active_cards" */
export type User_Active_Cards_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_selected?: InputMaybe<Scalars['Boolean']>;
  master_card?: InputMaybe<Master_Cards_Enum>;
  room_user_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Active_Cards_Stddev_Fields = {
  __typename?: 'user_active_cards_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_active_cards" */
export type User_Active_Cards_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Active_Cards_Stddev_Pop_Fields = {
  __typename?: 'user_active_cards_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_active_cards" */
export type User_Active_Cards_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Active_Cards_Stddev_Samp_Fields = {
  __typename?: 'user_active_cards_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_active_cards" */
export type User_Active_Cards_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Active_Cards_Sum_Fields = {
  __typename?: 'user_active_cards_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_active_cards" */
export type User_Active_Cards_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "user_active_cards" */
export enum User_Active_Cards_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsSelected = 'is_selected',
  /** column name */
  MasterCard = 'master_card',
  /** column name */
  RoomUserId = 'room_user_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type User_Active_Cards_Var_Pop_Fields = {
  __typename?: 'user_active_cards_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_active_cards" */
export type User_Active_Cards_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Active_Cards_Var_Samp_Fields = {
  __typename?: 'user_active_cards_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_active_cards" */
export type User_Active_Cards_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Active_Cards_Variance_Fields = {
  __typename?: 'user_active_cards_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_active_cards" */
export type User_Active_Cards_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  /** An array relationship */
  room_users: Array<Room_Users>;
  /** An aggregate relationship */
  room_users_aggregate: Room_Users_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersRoom_UsersArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRoom_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  room_users?: InputMaybe<Room_Users_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  room_users?: InputMaybe<Room_Users_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  room_users_aggregate?: InputMaybe<Room_Users_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type FetchUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FetchUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', name: string } | null };

export type CreateRoomMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateRoomMutation = { __typename?: 'mutation_root', insert_rooms?: { __typename?: 'rooms_mutation_response', returning: Array<{ __typename?: 'rooms', id: string }> } | null };

export type FetchDataQueryVariables = Exact<{
  roomID: Scalars['String'];
  userID: Scalars['String'];
}>;


export type FetchDataQuery = { __typename?: 'query_root', rooms_by_pk?: { __typename?: 'rooms', name: string } | null, master_cards: Array<{ __typename?: 'master_cards', value: string, comment: string }>, user_active_cards: Array<{ __typename?: 'user_active_cards', id: number }>, room_users: Array<{ __typename?: 'room_users', id: string }> };

export type UpdateRoomMutationVariables = Exact<{
  id: Scalars['String'];
  isCardsOpen: Scalars['Boolean'];
}>;


export type UpdateRoomMutation = { __typename?: 'mutation_root', update_rooms_by_pk?: { __typename?: 'rooms', is_cards_open: boolean } | null };

export type UpdateUserActiveCardsMutationVariables = Exact<{
  id: Scalars['Int'];
  isSelected: Scalars['Boolean'];
  masterCard: Master_Cards_Enum;
}>;


export type UpdateUserActiveCardsMutation = { __typename?: 'mutation_root', update_user_active_cards_by_pk?: { __typename?: 'user_active_cards', id: number, master_card: Master_Cards_Enum, is_selected: boolean } | null };

export type CreateRoomUserAndActiveCardMutationVariables = Exact<{
  roomID: Scalars['String'];
  userID: Scalars['String'];
  masterCard?: InputMaybe<Master_Cards_Enum>;
}>;


export type CreateRoomUserAndActiveCardMutation = { __typename?: 'mutation_root', insert_room_users_one?: { __typename?: 'room_users', id: string } | null };

export type ResetUserActiveCardsMutationVariables = Exact<{
  roomID: Scalars['String'];
}>;


export type ResetUserActiveCardsMutation = { __typename?: 'mutation_root', update_rooms_by_pk?: { __typename?: 'rooms', is_cards_open: boolean } | null, update_user_active_cards?: { __typename?: 'user_active_cards_mutation_response', returning: Array<{ __typename?: 'user_active_cards', id: number }> } | null };

export type RoomSubscriptionSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type RoomSubscriptionSubscription = { __typename?: 'subscription_root', rooms_by_pk?: { __typename?: 'rooms', is_cards_open: boolean } | null };

export type UserActiveCardsSubscriptionSubscriptionVariables = Exact<{
  roomID: Scalars['String'];
}>;


export type UserActiveCardsSubscriptionSubscription = { __typename?: 'subscription_root', user_active_cards: Array<{ __typename?: 'user_active_cards', id: number, is_selected: boolean, masterCardByMasterCard: { __typename?: 'master_cards', value: string, comment: string }, room_user: { __typename?: 'room_users', user: { __typename?: 'users', id: string, name: string } } }> };

export type GetRoomsQueryVariables = Exact<{
  userID: Scalars['String'];
}>;


export type GetRoomsQuery = { __typename?: 'query_root', rooms: Array<{ __typename?: 'rooms', id: string, name: string }>, users_by_pk?: { __typename?: 'users', name: string } | null };


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
export type Boolean_Comparison_Exp = {
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
export type Int_Comparison_Exp = {
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
export type String_Comparison_Exp = {
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
export type Master_Cards = {
  __typename?: 'master_cards';
  comment: Scalars['String'];
  /** An array relationship */
  user_active_cards: Array<User_Active_Cards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: User_Active_Cards_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "master_cards" */
export type Master_CardsUser_Active_CardsArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


/** columns and relationships of "master_cards" */
export type Master_CardsUser_Active_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};

/** aggregated selection of "master_cards" */
export type Master_Cards_Aggregate = {
  __typename?: 'master_cards_aggregate';
  aggregate?: Maybe<Master_Cards_Aggregate_Fields>;
  nodes: Array<Master_Cards>;
};

/** aggregate fields of "master_cards" */
export type Master_Cards_Aggregate_Fields = {
  __typename?: 'master_cards_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Master_Cards_Max_Fields>;
  min?: Maybe<Master_Cards_Min_Fields>;
};


/** aggregate fields of "master_cards" */
export type Master_Cards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Master_Cards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "master_cards". All fields are combined with a logical 'AND'. */
export type Master_Cards_Bool_Exp = {
  _and?: InputMaybe<Array<Master_Cards_Bool_Exp>>;
  _not?: InputMaybe<Master_Cards_Bool_Exp>;
  _or?: InputMaybe<Array<Master_Cards_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  user_active_cards?: InputMaybe<User_Active_Cards_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "master_cards" */
export enum Master_Cards_Constraint {
  /** unique or primary key constraint */
  MasterCardsPkey = 'master_cards_pkey'
}

export enum Master_Cards_Enum {
  /** 8 */
  Eight = 'EIGHT',
  /** 89 */
  EightyNine = 'EIGHTY_NINE',
  /** 55 */
  FiftyFive = 'FIFTY_FIVE',
  /** 5 */
  Five = 'FIVE',
  /** 1 */
  One = 'ONE',
  /** 13 */
  Thirteen = 'THIRTEEN',
  /** 34 */
  ThirtyFour = 'THIRTY_FOUR',
  /** 3 */
  Three = 'THREE',
  /** 21 */
  TwentyOne = 'TWENTY_ONE',
  /** 2 */
  Two = 'TWO'
}

/** Boolean expression to compare columns of type "master_cards_enum". All fields are combined with logical 'AND'. */
export type Master_Cards_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Master_Cards_Enum>;
  _in?: InputMaybe<Array<Master_Cards_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Master_Cards_Enum>;
  _nin?: InputMaybe<Array<Master_Cards_Enum>>;
};

/** input type for inserting data into table "master_cards" */
export type Master_Cards_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  user_active_cards?: InputMaybe<User_Active_Cards_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Master_Cards_Max_Fields = {
  __typename?: 'master_cards_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Master_Cards_Min_Fields = {
  __typename?: 'master_cards_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "master_cards" */
export type Master_Cards_Mutation_Response = {
  __typename?: 'master_cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Master_Cards>;
};

/** input type for inserting object relation for remote table "master_cards" */
export type Master_Cards_Obj_Rel_Insert_Input = {
  data: Master_Cards_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Master_Cards_On_Conflict>;
};

/** on_conflict condition type for table "master_cards" */
export type Master_Cards_On_Conflict = {
  constraint: Master_Cards_Constraint;
  update_columns?: Array<Master_Cards_Update_Column>;
  where?: InputMaybe<Master_Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "master_cards". */
export type Master_Cards_Order_By = {
  comment?: InputMaybe<Order_By>;
  user_active_cards_aggregate?: InputMaybe<User_Active_Cards_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: master_cards */
export type Master_Cards_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "master_cards" */
export enum Master_Cards_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "master_cards" */
export type Master_Cards_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "master_cards" */
export enum Master_Cards_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "master_cards" */
  delete_master_cards?: Maybe<Master_Cards_Mutation_Response>;
  /** delete single row from the table: "master_cards" */
  delete_master_cards_by_pk?: Maybe<Master_Cards>;
  /** delete data from the table: "room_users" */
  delete_room_users?: Maybe<Room_Users_Mutation_Response>;
  /** delete single row from the table: "room_users" */
  delete_room_users_by_pk?: Maybe<Room_Users>;
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<Rooms_Mutation_Response>;
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>;
  /** delete data from the table: "user_active_cards" */
  delete_user_active_cards?: Maybe<User_Active_Cards_Mutation_Response>;
  /** delete single row from the table: "user_active_cards" */
  delete_user_active_cards_by_pk?: Maybe<User_Active_Cards>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "master_cards" */
  insert_master_cards?: Maybe<Master_Cards_Mutation_Response>;
  /** insert a single row into the table: "master_cards" */
  insert_master_cards_one?: Maybe<Master_Cards>;
  /** insert data into the table: "room_users" */
  insert_room_users?: Maybe<Room_Users_Mutation_Response>;
  /** insert a single row into the table: "room_users" */
  insert_room_users_one?: Maybe<Room_Users>;
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<Rooms_Mutation_Response>;
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>;
  /** insert data into the table: "user_active_cards" */
  insert_user_active_cards?: Maybe<User_Active_Cards_Mutation_Response>;
  /** insert a single row into the table: "user_active_cards" */
  insert_user_active_cards_one?: Maybe<User_Active_Cards>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "master_cards" */
  update_master_cards?: Maybe<Master_Cards_Mutation_Response>;
  /** update single row of the table: "master_cards" */
  update_master_cards_by_pk?: Maybe<Master_Cards>;
  /** update data of the table: "room_users" */
  update_room_users?: Maybe<Room_Users_Mutation_Response>;
  /** update single row of the table: "room_users" */
  update_room_users_by_pk?: Maybe<Room_Users>;
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<Rooms_Mutation_Response>;
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>;
  /** update data of the table: "user_active_cards" */
  update_user_active_cards?: Maybe<User_Active_Cards_Mutation_Response>;
  /** update single row of the table: "user_active_cards" */
  update_user_active_cards_by_pk?: Maybe<User_Active_Cards>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Master_CardsArgs = {
  where: Master_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Master_Cards_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Room_UsersArgs = {
  where: Room_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RoomsArgs = {
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rooms_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_Active_CardsArgs = {
  where: User_Active_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Active_Cards_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Master_CardsArgs = {
  objects: Array<Master_Cards_Insert_Input>;
  on_conflict?: InputMaybe<Master_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_Cards_OneArgs = {
  object: Master_Cards_Insert_Input;
  on_conflict?: InputMaybe<Master_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_UsersArgs = {
  objects: Array<Room_Users_Insert_Input>;
  on_conflict?: InputMaybe<Room_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_Users_OneArgs = {
  object: Room_Users_Insert_Input;
  on_conflict?: InputMaybe<Room_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomsArgs = {
  objects: Array<Rooms_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rooms_OneArgs = {
  object: Rooms_Insert_Input;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Active_CardsArgs = {
  objects: Array<User_Active_Cards_Insert_Input>;
  on_conflict?: InputMaybe<User_Active_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Active_Cards_OneArgs = {
  object: User_Active_Cards_Insert_Input;
  on_conflict?: InputMaybe<User_Active_Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Master_CardsArgs = {
  _set?: InputMaybe<Master_Cards_Set_Input>;
  where: Master_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Master_Cards_By_PkArgs = {
  _set?: InputMaybe<Master_Cards_Set_Input>;
  pk_columns: Master_Cards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Room_UsersArgs = {
  _set?: InputMaybe<Room_Users_Set_Input>;
  where: Room_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Users_By_PkArgs = {
  _set?: InputMaybe<Room_Users_Set_Input>;
  pk_columns: Room_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoomsArgs = {
  _set?: InputMaybe<Rooms_Set_Input>;
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rooms_By_PkArgs = {
  _set?: InputMaybe<Rooms_Set_Input>;
  pk_columns: Rooms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Active_CardsArgs = {
  _inc?: InputMaybe<User_Active_Cards_Inc_Input>;
  _set?: InputMaybe<User_Active_Cards_Set_Input>;
  where: User_Active_Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Active_Cards_By_PkArgs = {
  _inc?: InputMaybe<User_Active_Cards_Inc_Input>;
  _set?: InputMaybe<User_Active_Cards_Set_Input>;
  pk_columns: User_Active_Cards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "master_cards" */
  master_cards: Array<Master_Cards>;
  /** fetch aggregated fields from the table: "master_cards" */
  master_cards_aggregate: Master_Cards_Aggregate;
  /** fetch data from the table: "master_cards" using primary key columns */
  master_cards_by_pk?: Maybe<Master_Cards>;
  /** An array relationship */
  room_users: Array<Room_Users>;
  /** An aggregate relationship */
  room_users_aggregate: Room_Users_Aggregate;
  /** fetch data from the table: "room_users" using primary key columns */
  room_users_by_pk?: Maybe<Room_Users>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** An array relationship */
  user_active_cards: Array<User_Active_Cards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: User_Active_Cards_Aggregate;
  /** fetch data from the table: "user_active_cards" using primary key columns */
  user_active_cards_by_pk?: Maybe<User_Active_Cards>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootMaster_CardsArgs = {
  distinct_on?: InputMaybe<Array<Master_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Master_Cards_Order_By>>;
  where?: InputMaybe<Master_Cards_Bool_Exp>;
};


export type Query_RootMaster_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Master_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Master_Cards_Order_By>>;
  where?: InputMaybe<Master_Cards_Bool_Exp>;
};


export type Query_RootMaster_Cards_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootRoom_UsersArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


export type Query_RootRoom_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


export type Query_RootRoom_Users_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUser_Active_CardsArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


export type Query_RootUser_Active_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


export type Query_RootUser_Active_Cards_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "room_users" */
export type Room_Users = {
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
  user_active_cards: Array<User_Active_Cards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: User_Active_Cards_Aggregate;
  user_id: Scalars['String'];
};


/** columns and relationships of "room_users" */
export type Room_UsersUser_Active_CardsArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


/** columns and relationships of "room_users" */
export type Room_UsersUser_Active_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};

/** aggregated selection of "room_users" */
export type Room_Users_Aggregate = {
  __typename?: 'room_users_aggregate';
  aggregate?: Maybe<Room_Users_Aggregate_Fields>;
  nodes: Array<Room_Users>;
};

/** aggregate fields of "room_users" */
export type Room_Users_Aggregate_Fields = {
  __typename?: 'room_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Room_Users_Max_Fields>;
  min?: Maybe<Room_Users_Min_Fields>;
};


/** aggregate fields of "room_users" */
export type Room_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Room_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "room_users" */
export type Room_Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Room_Users_Max_Order_By>;
  min?: InputMaybe<Room_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "room_users" */
export type Room_Users_Arr_Rel_Insert_Input = {
  data: Array<Room_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Room_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "room_users". All fields are combined with a logical 'AND'. */
export type Room_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Room_Users_Bool_Exp>>;
  _not?: InputMaybe<Room_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Room_Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  room_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_active_cards?: InputMaybe<User_Active_Cards_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "room_users" */
export enum Room_Users_Constraint {
  /** unique or primary key constraint */
  RoomUsersPkey = 'room_users_pkey',
  /** unique or primary key constraint */
  RoomUsersUserIdRoomIdKey = 'room_users_user_id_room_id_key'
}

/** input type for inserting data into table "room_users" */
export type Room_Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  room_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_active_cards?: InputMaybe<User_Active_Cards_Arr_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Room_Users_Max_Fields = {
  __typename?: 'room_users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  room_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "room_users" */
export type Room_Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Users_Min_Fields = {
  __typename?: 'room_users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  room_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "room_users" */
export type Room_Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "room_users" */
export type Room_Users_Mutation_Response = {
  __typename?: 'room_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Room_Users>;
};

/** input type for inserting object relation for remote table "room_users" */
export type Room_Users_Obj_Rel_Insert_Input = {
  data: Room_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Room_Users_On_Conflict>;
};

/** on_conflict condition type for table "room_users" */
export type Room_Users_On_Conflict = {
  constraint: Room_Users_Constraint;
  update_columns?: Array<Room_Users_Update_Column>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "room_users". */
export type Room_Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_active_cards_aggregate?: InputMaybe<User_Active_Cards_Aggregate_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: room_users */
export type Room_Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "room_users" */
export enum Room_Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "room_users" */
export type Room_Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  room_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "room_users" */
export enum Room_Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "rooms" */
export type Rooms = {
  __typename?: 'rooms';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  is_cards_open: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  room_users: Array<Room_Users>;
  /** An aggregate relationship */
  room_users_aggregate: Room_Users_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "rooms" */
export type RoomsRoom_UsersArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


/** columns and relationships of "rooms" */
export type RoomsRoom_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};

/** aggregated selection of "rooms" */
export type Rooms_Aggregate = {
  __typename?: 'rooms_aggregate';
  aggregate?: Maybe<Rooms_Aggregate_Fields>;
  nodes: Array<Rooms>;
};

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_Fields = {
  __typename?: 'rooms_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rooms_Max_Fields>;
  min?: Maybe<Rooms_Min_Fields>;
};


/** aggregate fields of "rooms" */
export type Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_cards_open?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  room_users?: InputMaybe<Room_Users_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rooms" */
export enum Rooms_Constraint {
  /** unique or primary key constraint */
  RoomsPkey = 'rooms_pkey'
}

/** input type for inserting data into table "rooms" */
export type Rooms_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  is_cards_open?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  room_users?: InputMaybe<Room_Users_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rooms_Max_Fields = {
  __typename?: 'rooms_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rooms_Min_Fields = {
  __typename?: 'rooms_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rooms" */
export type Rooms_Mutation_Response = {
  __typename?: 'rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>;
};

/** input type for inserting object relation for remote table "rooms" */
export type Rooms_Obj_Rel_Insert_Input = {
  data: Rooms_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};

/** on_conflict condition type for table "rooms" */
export type Rooms_On_Conflict = {
  constraint: Rooms_Constraint;
  update_columns?: Array<Rooms_Update_Column>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms". */
export type Rooms_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_cards_open?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  room_users_aggregate?: InputMaybe<Room_Users_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rooms */
export type Rooms_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "rooms" */
export enum Rooms_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCardsOpen = 'is_cards_open',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rooms" */
export type Rooms_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  is_cards_open?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "rooms" */
export enum Rooms_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCardsOpen = 'is_cards_open',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "master_cards" */
  master_cards: Array<Master_Cards>;
  /** fetch aggregated fields from the table: "master_cards" */
  master_cards_aggregate: Master_Cards_Aggregate;
  /** fetch data from the table: "master_cards" using primary key columns */
  master_cards_by_pk?: Maybe<Master_Cards>;
  /** An array relationship */
  room_users: Array<Room_Users>;
  /** An aggregate relationship */
  room_users_aggregate: Room_Users_Aggregate;
  /** fetch data from the table: "room_users" using primary key columns */
  room_users_by_pk?: Maybe<Room_Users>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** An array relationship */
  user_active_cards: Array<User_Active_Cards>;
  /** An aggregate relationship */
  user_active_cards_aggregate: User_Active_Cards_Aggregate;
  /** fetch data from the table: "user_active_cards" using primary key columns */
  user_active_cards_by_pk?: Maybe<User_Active_Cards>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootMaster_CardsArgs = {
  distinct_on?: InputMaybe<Array<Master_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Master_Cards_Order_By>>;
  where?: InputMaybe<Master_Cards_Bool_Exp>;
};


export type Subscription_RootMaster_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Master_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Master_Cards_Order_By>>;
  where?: InputMaybe<Master_Cards_Bool_Exp>;
};


export type Subscription_RootMaster_Cards_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootRoom_UsersArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


export type Subscription_RootRoom_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


export type Subscription_RootRoom_Users_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUser_Active_CardsArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


export type Subscription_RootUser_Active_Cards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Active_Cards_Order_By>>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};


export type Subscription_RootUser_Active_Cards_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
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
export type User_Active_Cards = {
  __typename?: 'user_active_cards';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  is_selected: Scalars['Boolean'];
  /** An object relationship */
  masterCardByMasterCard: Master_Cards;
  master_card: Master_Cards_Enum;
  /** An object relationship */
  room_user: Room_Users;
  room_user_id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "user_active_cards" */
export type User_Active_Cards_Aggregate = {
  __typename?: 'user_active_cards_aggregate';
  aggregate?: Maybe<User_Active_Cards_Aggregate_Fields>;
  nodes: Array<User_Active_Cards>;
};

/** aggregate fields of "user_active_cards" */
export type User_Active_Cards_Aggregate_Fields = {
  __typename?: 'user_active_cards_aggregate_fields';
  avg?: Maybe<User_Active_Cards_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Active_Cards_Max_Fields>;
  min?: Maybe<User_Active_Cards_Min_Fields>;
  stddev?: Maybe<User_Active_Cards_Stddev_Fields>;
  stddev_pop?: Maybe<User_Active_Cards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Active_Cards_Stddev_Samp_Fields>;
  sum?: Maybe<User_Active_Cards_Sum_Fields>;
  var_pop?: Maybe<User_Active_Cards_Var_Pop_Fields>;
  var_samp?: Maybe<User_Active_Cards_Var_Samp_Fields>;
  variance?: Maybe<User_Active_Cards_Variance_Fields>;
};


/** aggregate fields of "user_active_cards" */
export type User_Active_Cards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Active_Cards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_active_cards" */
export type User_Active_Cards_Aggregate_Order_By = {
  avg?: InputMaybe<User_Active_Cards_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Active_Cards_Max_Order_By>;
  min?: InputMaybe<User_Active_Cards_Min_Order_By>;
  stddev?: InputMaybe<User_Active_Cards_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Active_Cards_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Active_Cards_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Active_Cards_Sum_Order_By>;
  var_pop?: InputMaybe<User_Active_Cards_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Active_Cards_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Active_Cards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_active_cards" */
export type User_Active_Cards_Arr_Rel_Insert_Input = {
  data: Array<User_Active_Cards_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Active_Cards_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Active_Cards_Avg_Fields = {
  __typename?: 'user_active_cards_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_active_cards" */
export type User_Active_Cards_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_active_cards". All fields are combined with a logical 'AND'. */
export type User_Active_Cards_Bool_Exp = {
  _and?: InputMaybe<Array<User_Active_Cards_Bool_Exp>>;
  _not?: InputMaybe<User_Active_Cards_Bool_Exp>;
  _or?: InputMaybe<Array<User_Active_Cards_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_selected?: InputMaybe<Boolean_Comparison_Exp>;
  masterCardByMasterCard?: InputMaybe<Master_Cards_Bool_Exp>;
  master_card?: InputMaybe<Master_Cards_Enum_Comparison_Exp>;
  room_user?: InputMaybe<Room_Users_Bool_Exp>;
  room_user_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_active_cards" */
export enum User_Active_Cards_Constraint {
  /** unique or primary key constraint */
  UserActiveCardsPkey = 'user_active_cards_pkey'
}

/** input type for incrementing numeric columns in table "user_active_cards" */
export type User_Active_Cards_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_active_cards" */
export type User_Active_Cards_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_selected?: InputMaybe<Scalars['Boolean']>;
  masterCardByMasterCard?: InputMaybe<Master_Cards_Obj_Rel_Insert_Input>;
  master_card?: InputMaybe<Master_Cards_Enum>;
  room_user?: InputMaybe<Room_Users_Obj_Rel_Insert_Input>;
  room_user_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Active_Cards_Max_Fields = {
  __typename?: 'user_active_cards_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  room_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user_active_cards" */
export type User_Active_Cards_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Active_Cards_Min_Fields = {
  __typename?: 'user_active_cards_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  room_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user_active_cards" */
export type User_Active_Cards_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_active_cards" */
export type User_Active_Cards_Mutation_Response = {
  __typename?: 'user_active_cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Active_Cards>;
};

/** on_conflict condition type for table "user_active_cards" */
export type User_Active_Cards_On_Conflict = {
  constraint: User_Active_Cards_Constraint;
  update_columns?: Array<User_Active_Cards_Update_Column>;
  where?: InputMaybe<User_Active_Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "user_active_cards". */
export type User_Active_Cards_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_selected?: InputMaybe<Order_By>;
  masterCardByMasterCard?: InputMaybe<Master_Cards_Order_By>;
  master_card?: InputMaybe<Order_By>;
  room_user?: InputMaybe<Room_Users_Order_By>;
  room_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_active_cards */
export type User_Active_Cards_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_active_cards" */
export enum User_Active_Cards_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsSelected = 'is_selected',
  /** column name */
  MasterCard = 'master_card',
  /** column name */
  RoomUserId = 'room_user_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user_active_cards" */
export type User_Active_Cards_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_selected?: InputMaybe<Scalars['Boolean']>;
  master_card?: InputMaybe<Master_Cards_Enum>;
  room_user_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Active_Cards_Stddev_Fields = {
  __typename?: 'user_active_cards_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_active_cards" */
export type User_Active_Cards_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Active_Cards_Stddev_Pop_Fields = {
  __typename?: 'user_active_cards_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_active_cards" */
export type User_Active_Cards_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Active_Cards_Stddev_Samp_Fields = {
  __typename?: 'user_active_cards_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_active_cards" */
export type User_Active_Cards_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Active_Cards_Sum_Fields = {
  __typename?: 'user_active_cards_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_active_cards" */
export type User_Active_Cards_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "user_active_cards" */
export enum User_Active_Cards_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsSelected = 'is_selected',
  /** column name */
  MasterCard = 'master_card',
  /** column name */
  RoomUserId = 'room_user_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type User_Active_Cards_Var_Pop_Fields = {
  __typename?: 'user_active_cards_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_active_cards" */
export type User_Active_Cards_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Active_Cards_Var_Samp_Fields = {
  __typename?: 'user_active_cards_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_active_cards" */
export type User_Active_Cards_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Active_Cards_Variance_Fields = {
  __typename?: 'user_active_cards_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_active_cards" */
export type User_Active_Cards_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  /** An array relationship */
  room_users: Array<Room_Users>;
  /** An aggregate relationship */
  room_users_aggregate: Room_Users_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersRoom_UsersArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRoom_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Users_Order_By>>;
  where?: InputMaybe<Room_Users_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  room_users?: InputMaybe<Room_Users_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  room_users?: InputMaybe<Room_Users_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  room_users_aggregate?: InputMaybe<Room_Users_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type FetchUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FetchUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', name: string } | null };

export type CreateRoomMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateRoomMutation = { __typename?: 'mutation_root', insert_rooms?: { __typename?: 'rooms_mutation_response', returning: Array<{ __typename?: 'rooms', id: string }> } | null };

export type FetchDataQueryVariables = Exact<{
  roomID: Scalars['String'];
  userID: Scalars['String'];
}>;


export type FetchDataQuery = { __typename?: 'query_root', rooms_by_pk?: { __typename?: 'rooms', name: string } | null, master_cards: Array<{ __typename?: 'master_cards', value: string, comment: string }>, user_active_cards: Array<{ __typename?: 'user_active_cards', id: number }>, room_users: Array<{ __typename?: 'room_users', id: string }> };

export type UpdateRoomMutationVariables = Exact<{
  id: Scalars['String'];
  isCardsOpen: Scalars['Boolean'];
}>;


export type UpdateRoomMutation = { __typename?: 'mutation_root', update_rooms_by_pk?: { __typename?: 'rooms', is_cards_open: boolean } | null };

export type UpdateUserActiveCardsMutationVariables = Exact<{
  id: Scalars['Int'];
  isSelected: Scalars['Boolean'];
  masterCard: Master_Cards_Enum;
}>;


export type UpdateUserActiveCardsMutation = { __typename?: 'mutation_root', update_user_active_cards_by_pk?: { __typename?: 'user_active_cards', id: number, master_card: Master_Cards_Enum, is_selected: boolean } | null };

export type CreateRoomUserAndActiveCardMutationVariables = Exact<{
  roomID: Scalars['String'];
  userID: Scalars['String'];
  masterCard?: InputMaybe<Master_Cards_Enum>;
}>;


export type CreateRoomUserAndActiveCardMutation = { __typename?: 'mutation_root', insert_room_users_one?: { __typename?: 'room_users', id: string } | null };

export type ResetUserActiveCardsMutationVariables = Exact<{
  roomID: Scalars['String'];
}>;


export type ResetUserActiveCardsMutation = { __typename?: 'mutation_root', update_rooms_by_pk?: { __typename?: 'rooms', is_cards_open: boolean } | null, update_user_active_cards?: { __typename?: 'user_active_cards_mutation_response', returning: Array<{ __typename?: 'user_active_cards', id: number }> } | null };

export type RoomSubscriptionSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type RoomSubscriptionSubscription = { __typename?: 'subscription_root', rooms_by_pk?: { __typename?: 'rooms', is_cards_open: boolean } | null };

export type UserActiveCardsSubscriptionSubscriptionVariables = Exact<{
  roomID: Scalars['String'];
}>;


export type UserActiveCardsSubscriptionSubscription = { __typename?: 'subscription_root', user_active_cards: Array<{ __typename?: 'user_active_cards', id: number, is_selected: boolean, masterCardByMasterCard: { __typename?: 'master_cards', value: string, comment: string }, room_user: { __typename?: 'room_users', user: { __typename?: 'users', id: string, name: string } } }> };

export type GetRoomsQueryVariables = Exact<{
  userID: Scalars['String'];
}>;


export type GetRoomsQuery = { __typename?: 'query_root', rooms: Array<{ __typename?: 'rooms', id: string, name: string }>, users_by_pk?: { __typename?: 'users', name: string } | null };
