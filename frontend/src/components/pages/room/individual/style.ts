import { Height } from "@mui/icons-material";

export const IndividualRoomStyle = {
  room: {
    container: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 10,
      gap: 7,
    },
    menu: {
      container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative",
      },
      info: {
        position: "absolute",
        right: 0,
        top: 5,
        width: "300px",
        maxHeight: "100px",
        whiteSpace: "pre-wrap",
      },
    },
    name: {
      fontSize: "36px",
    },
    cards: {
      container: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "20px 40px",
      },
      deck: {
        container: {
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: "20px 50px",
        },
      },
    },
  },
};
