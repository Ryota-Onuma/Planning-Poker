import { Box, Typography, Paper, Card } from "@mui/material";

import { CardAtHandStyle, CardInDeckStyle } from "./style";

export type CardAtHand = {
  number: string;
  isClicked: boolean;
  isDisabled: boolean;
};

export const CardAtHand = ({ number, isClicked, isDisabled }: CardAtHand) => {
  return (
    <Box
      sx={{
        ...CardAtHandStyle.card.container,
        ...(isClicked ? CardAtHandStyle.card.poped : {}),
      }}
    >
      <Paper
        elevation={3}
        sx={{
          ...CardAtHandStyle.card.body.container,
          ...(isDisabled ? CardAtHandStyle.card.body.disabled : {}),
        }}
      >
        <Typography component="h1" sx={CardAtHandStyle.card.body.displayNumber}>
          {number}
        </Typography>
      </Paper>
    </Box>
  );
};

export type CardInDeck = {
  number: string;
  isOpen: boolean;
  isSelected: boolean;
  userName: string;
};

export const CardInDeck = ({
  number,
  isOpen,
  isSelected,
  userName,
}: CardInDeck) => {
  return (
    <Box sx={CardInDeckStyle.card.container}>
      {isOpen && isSelected && (
        <Paper
          elevation={3}
          sx={{
            ...CardInDeckStyle.card.body.container,
            ...CardInDeckStyle.card.body.opened,
          }}
        >
          <Typography
            component="h1"
            sx={CardInDeckStyle.card.body.displayNumber}
          >
            {number}
          </Typography>
        </Paper>
      )}
      {!isOpen && isSelected && (
        <Paper
          elevation={3}
          sx={{
            ...CardInDeckStyle.card.body.container,
            ...CardInDeckStyle.card.body.selected,
          }}
        >
          <Typography
            component="h1"
            sx={CardInDeckStyle.card.body.displayNumber}
          ></Typography>
        </Paper>
      )}
      {isOpen && !isSelected && (
        <Paper elevation={3} sx={CardInDeckStyle.card.body.container}>
          <Typography
            component="h1"
            sx={CardInDeckStyle.card.body.displayNumber}
          ></Typography>
        </Paper>
      )}
      {!isOpen && !isSelected && (
        <Paper elevation={3} sx={CardInDeckStyle.card.body.container}>
          <Typography
            component="h1"
            sx={CardInDeckStyle.card.body.displayNumber}
          ></Typography>
        </Paper>
      )}
      <Typography component="span" sx={CardInDeckStyle.card.userName}>
        {userName}
      </Typography>
    </Box>
  );
};
