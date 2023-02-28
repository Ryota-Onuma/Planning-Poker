export const RoomChooseStyle = {
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
    title: {
      fontSize: "36px",
    },
    menu: {
      container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px 40px",
        padding: 10,
      },
      createRoom: {
        container: {
          display: "flex",
          flexDirection: "column",
          gap: 3,
          a: {
            textDecoration: "none",
          },
        },
        title: {
          fontSize: "28px",
        },
      },
      joinRoom: {
        container: {
          display: "flex",
          flexDirection: "column",
          gap: 3,
          a: {
            textDecoration: "none",
          },
        },
        title: {
          fontSize: "28px",
        },
      },
    },
  },
};
