import { TopStyle as Style } from "./style";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

const Top = () => {
  const { loginWithPopup, isAuthenticated } = useAuth0();
  return (
    <Box sx={Style.top.container}>
      {isAuthenticated && (
        <Box>
          <Link href="/room/choose">
            <Button variant="contained">ルームを選ぶ</Button>
          </Link>
        </Box>
      )}
      {!isAuthenticated && (
        <Link href="/user/signin">サインインして開始する</Link>
      )}
    </Box>
  );
};

export default Top;
