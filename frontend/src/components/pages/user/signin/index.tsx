import Loading from "@/components/common/loading";
import { useAuth0 } from "@auth0/auth0-react";

import { Box, Button, Typography, Paper } from "@mui/material";

import { UserStyle as Style } from "./style";
import router, { useRouter } from "next/router";
import { useEffect } from "react";

const User = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, error } = useAuth0();
  const router = useRouter();
  const isReady = router.isReady;
  useEffect(() => {
    if (typeof window !== "undefined" && isReady && isAuthenticated) {
      const redirect_url = localStorage.getItem('redirect_url')
      if(redirect_url) {
        localStorage.removeItem('redirect_url');
        router.push(redirect_url)
        return
      }else{
        router.push(`${process.env.NEXT_PUBLIC_ORIGIN}/room/choose`)
        return
      }
    }
  },[isAuthenticated, isReady, router])

  const generateRedirectPathForLoginWithRedirect = () => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has("redirect_url")) {
        localStorage.setItem('redirect_url', `${process.env.NEXT_PUBLIC_ORIGIN}/room/play/${searchParams.get(
          "redirect_url"
        )}`);
        return `${process.env.NEXT_PUBLIC_ORIGIN}/user/signin`
      } else {
        return `${process.env.NEXT_PUBLIC_ORIGIN}/room/choose`
      }
    }
  }

  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;

  return (
    <Box sx={Style.user.container}>
      <Typography component="h1" sx={Style.user.title}>
        サインイン
      </Typography>
      <Paper>
        {!isAuthenticated && (
          <Button
            onClick={async () =>
              await loginWithRedirect({
                authorizationParams: {
                  redirect_uri: generateRedirectPathForLoginWithRedirect()
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
