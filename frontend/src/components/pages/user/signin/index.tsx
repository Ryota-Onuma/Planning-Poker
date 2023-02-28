import Loading from "@/components/common/loading";
import { useAuth0 } from "@auth0/auth0-react";

import { Box, Button, Typography, Paper } from "@mui/material";

import { UserStyle as Style } from "./style";
import router from "next/router";

const User = () => {
  const { loginWithPopup, isAuthenticated, isLoading, error } = useAuth0();

  const generateRedirectPath = () => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has("redirect_url")) {
        router.push(`/room/play/${searchParams.get("redirect_url")}`);
        return `${process.env.NEXT_PUBLIC_ORIGIN}/room/play/${searchParams.get(
          "redirect_url"
        )}`;
      } else {
        router.push("/room/choose");
      }
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <Box sx={Style.user.container}>
      <Typography component="h1" sx={Style.user.title}>
        サインイン
      </Typography>
      <Paper>
        {!isAuthenticated && (
          <Button
            onClick={async () =>
              await loginWithPopup({
                authorizationParams: {
                  redirect_uri: generateRedirectPath(),
                },
              })
            }
          >
            サインインする
          </Button>
        )}
      </Paper>
    </Box>
  );
};

export default User;
