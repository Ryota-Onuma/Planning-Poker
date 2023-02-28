import { Color } from "@/styles/color";
export const HeaderStyle = {
  header: {
    toolBar: {
      display: "flex",
      justifyContent: "space-between",
      a: {
        textDecoration: "none",
      },
      title: {
        flexGrow: 1,
        fontWight: "bold",
        fontSize: "18px",
        color: Color.white,
      },
    },
    right: {
      container: {
        position: "relative",
      },
      profile: {
        container: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          gap: 1,
          img: {
            width: "50px",
            height: "50px",
          },
        },
      },
      logout: {
        container: {
          position: "absolute",
          top: "60px",
          right: 0,
          p: 2,
          display: "none",
          background: "red",
        },
        visible: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      },
    },
  },
};
