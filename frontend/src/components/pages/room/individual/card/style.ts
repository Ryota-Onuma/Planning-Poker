import { Color } from "@/styles/color";

export const CardAtHandStyle = {
  card: {
    container: {
      cursor: "pointer",
      height: "120px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      "&:hover": {
        alignItems: "flex-start",
      },
    },
    poped: {
      alignItems: "flex-start",
    },
    body: {
      container: {
        width: "80px",
        height: "90px",
        backgroundColor: Color.cardColor,
        display: "flex",
        jusifyContent: "center",
        alignItems: "center",
      },
      disabled: {
        backgroundColor: Color.gray,
        cursor: "not-allowed",
      },
      displayNumber: {
        width: "100%",
        textAlign: "center",
        color: Color.white,
        fontSize: "36px",
      },
    },
  },
};

export const CardInDeckStyle = {
  card: {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
    },

    body: {
      container: {
        width: "80px",
        border: `1px solid ${Color.cardColor}`,
        height: "90px",
        display: "flex",
        jusifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        backgroundColor: Color.white,
      },
      opened: {
        backgroundColor: Color.cardColor,
      },
      selected: {
        backgroundColor: Color.gray,
        border: `1px solid ${Color.gray}`,
      },
      displayNumber: {
        width: "100%",
        textAlign: "center",
        color: Color.white,
        fontSize: "36px",
      },
    },
    userName: {},
  },
};
