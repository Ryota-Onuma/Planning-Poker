export const UserStyle = {
  user: {
    container: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 10,
      gap: 10,
    },
    title: {
      fontSize: "36px",
    },
    form: {
      container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: "30px",
        width: "50%",
      },
      controll: {
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        width: "100%",
      },
      errorNotify: {
        m: 0,
      },
      button: {
        container: {
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        },
      },
    },
  },
};
