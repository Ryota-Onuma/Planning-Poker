import { useQuery, useSubscription, useMutation } from "@apollo/client";
import { IndividualRoomStyle as Style } from "./style";
import { Box, Button, Typography } from "@mui/material";
import { gql } from "@/generated/gql";
import { MasterCardsEnum } from "@/generated/graphql";
import Loading from "@/components/common/loading";
import { CardAtHand, CardInDeck } from "./card";
import { useEffect } from "react";

export type IndividualRoomProps = { id: string; userID: string };

const INDIVIDUAL_ROOM_QUERY = gql(/* GraphQL */ `
  query fetchData($roomID: String!, $userID: String!) {
    rooms_by_pk(id: $roomID) {
      name
    }
    master_cards {
      value
      comment
    }
    user_active_cards(
      limit: 1
      where: {
        room_user: { room_id: { _eq: $roomID }, user_id: { _eq: $userID } }
      }
    ) {
      id
    }
    room_users(
      limit: 1
      where: { room_id: { _eq: $roomID }, user_id: { _eq: $userID } }
    ) {
      id
    }
  }
`);

const INDIVISUAL_ROOM_UPDATE_ROOM_MUTATION = gql(/* GraphQL */ `
  mutation updateRoom($id: String!, $isCardsOpen: Boolean!) {
    update_rooms_by_pk(
      pk_columns: { id: $id }
      _set: { is_cards_open: $isCardsOpen }
    ) {
      is_cards_open
    }
  }
`);

const INDIVIDUAL_ROOM_UPDATE_ACTIVE_CARD_MUTATION = gql(/* GraphQL */ `
  mutation updateUserActiveCards(
    $id: Int!
    $isSelected: Boolean!
    $masterCard: master_cards_enum!
  ) {
    update_user_active_cards_by_pk(
      pk_columns: { id: $id }
      _set: { is_selected: $isSelected, master_card: $masterCard }
    ) {
      id
      master_card
      is_selected
    }
  }
`);

const INDIVIDUAL_ROOM_CREATE_ROOM_USERS_MUTATION = gql(/* GraphQL */ `
  mutation createRoomUserAndActiveCard(
    $roomID: String!
    $userID: String!
    $masterCard: master_cards_enum = ONE
  ) {
    insert_room_users_one(
      object: {
        user_id: $userID
        room_id: $roomID
        user_active_cards: { data: { master_card: $masterCard } }
      }
    ) {
      id
    }
  }
`);

const INDIVIDUAL_ROOM_RESET_ACTIVE_CARD_MUTATION = gql(/* GraphQL */ `
  mutation resetUserActiveCards($roomID: String!) {
    update_rooms_by_pk(
      pk_columns: { id: $roomID }
      _set: { is_cards_open: false }
    ) {
      is_cards_open
    }

    update_user_active_cards(
      where: { room_user: { room_id: { _eq: $roomID } } }
      _set: { is_selected: false }
    ) {
      returning {
        id
      }
    }
  }
`);

const INDIVISUAL_ROOM_SUBSCRIPTION = gql(/* GraphQL */ `
  subscription roomSubscription($id: String!) {
    rooms_by_pk(id: $id) {
      is_cards_open
    }
  }
`);

const INDIVISUAL_ROOM_USER_ACTION_CARDS_SUBSCRIPTION = gql(/* GraphQL */ `
  subscription userActiveCardsSubscription($roomID: String!) {
    user_active_cards(
      where: { room_user: { room: { id: { _eq: $roomID } } } }
      order_by: { id: asc }
    ) {
      id
      is_selected
      masterCardByMasterCard {
        value
        comment
      }
      room_user {
        user {
          id
          name
        }
      }
    }
  }
`);

const IndividualRoom = ({ id, userID }: IndividualRoomProps) => {
  const { loading, error, data } = useQuery(INDIVIDUAL_ROOM_QUERY, {
    variables: { roomID: id, userID },
  });

  const {
    data: roomSubscriptionData,
    loading: roomSubscriptionLoading,
    error: roomSubscriptionError,
  } = useSubscription(INDIVISUAL_ROOM_SUBSCRIPTION, {
    variables: { id },
  });

  const {
    data: activeCardsSubscriptionData,
    loading: activeCardsSubscriptionLoading,
    error: activeCardsSubscriptionError,
  } = useSubscription(INDIVISUAL_ROOM_USER_ACTION_CARDS_SUBSCRIPTION, {
    variables: { roomID: id },
  });

  const [updateRoom, { error: roomUpdateError }] = useMutation(
    INDIVISUAL_ROOM_UPDATE_ROOM_MUTATION
  );
  const [updateActiveCard, { error: updateActiveCardError }] = useMutation(
    INDIVIDUAL_ROOM_UPDATE_ACTIVE_CARD_MUTATION
  );

  const [resetActiveCards, { error: resetActiveCardError }] = useMutation(
    INDIVIDUAL_ROOM_RESET_ACTIVE_CARD_MUTATION
  );

  const [createRoomUser, { error: createRoomUserError }] = useMutation(
    INDIVIDUAL_ROOM_CREATE_ROOM_USERS_MUTATION,
    {
      variables: { roomID: id, userID },
    }
  );

  useEffect(() => {
    if (!loading && !data?.room_users.length) {
      createRoomUser({ variables: { roomID: id, userID } });
    }
  }, [createRoomUser, data, id, loading, userID]);

  const execUpdateActiveCard = async (
    activeCardID: number,
    isSelected: boolean,
    masterCard: MasterCardsEnum
  ) => {
    await updateActiveCard({
      variables: { id: activeCardID, isSelected, masterCard },
    });
  };

  const execUpdateRoom = async (isCardsOpen: boolean) => {
    if (isCardsOpen) {
      await updateRoom({ variables: { id, isCardsOpen } });
    } else {
      await resetActiveCards({ variables: { roomID: id } });
    }
  };

  if (loading || roomSubscriptionLoading || activeCardsSubscriptionLoading)
    return <Loading />;
  if (
    error ||
    roomSubscriptionError ||
    activeCardsSubscriptionError ||
    roomUpdateError ||
    updateActiveCardError ||
    resetActiveCardError ||
    createRoomUserError
  ) {
    console.log(error);
    console.log(roomSubscriptionError);
    console.log(activeCardsSubscriptionError);
    console.log(roomUpdateError);
    console.log(updateActiveCardError);
    console.log(resetActiveCardError);
    console.log(createRoomUserError);
    return <p>ERROR</p>;
  }

  const roomName = data?.rooms_by_pk?.name || "no room";
  const masterCards = data?.master_cards || [];
  const isCardsOpen = roomSubscriptionData?.rooms_by_pk?.is_cards_open || false;
  const activeCards = activeCardsSubscriptionData?.user_active_cards || [];

  const currentUserActiveCard = activeCards.find(
    (card) => card.room_user.user.id === userID
  );

  return (
    <Box sx={Style.room.container}>
      <Typography component="h1" sx={Style.room.name}>
        {roomName}
      </Typography>
      <Button onClick={() => execUpdateRoom(!isCardsOpen)} variant="contained">
        {isCardsOpen ? "リセットする" : "カードをめくる"}
      </Button>
      <Box sx={Style.room.cards.deck.container}>
        {activeCards.map((card) => (
          <CardInDeck
            number={card.masterCardByMasterCard.comment}
            isOpen={isCardsOpen}
            userName={card?.room_user?.user?.name ?? "名無しさん"}
            isSelected={card.is_selected}
            key={card.id}
          />
        ))}
      </Box>
      <Box sx={Style.room.cards.container}>
        {currentUserActiveCard && (
          <>
            {masterCards.map((card) => (
              <Box
                onClick={
                  isCardsOpen
                    ? undefined
                    : () =>
                        execUpdateActiveCard(
                          currentUserActiveCard.id,
                          currentUserActiveCard.masterCardByMasterCard.value ===
                            card.value
                            ? !currentUserActiveCard.is_selected
                            : true,
                          card.value as MasterCardsEnum
                        )
                }
                key={card.value}
              >
                <CardAtHand
                  number={card.comment}
                  isClicked={
                    card.value ==
                      currentUserActiveCard.masterCardByMasterCard.value &&
                    currentUserActiveCard.is_selected
                  }
                  isDisabled={isCardsOpen}
                />
              </Box>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default IndividualRoom;
