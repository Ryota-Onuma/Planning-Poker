import { HeaderStyle as Style } from "./style";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import arrowDropDown from "@iconify/icons-material-symbols/arrow-drop-down";

import { gql } from "@/generated/gql";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";

const USER_QUERY = gql(/* GraphQL */ `
  query fetchUser($id: String!) {
    users_by_pk(id: $id) {
      name
    }
  }
`);

const Header = () => {
  const { logout, isAuthenticated, user } = useAuth0();
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const isReady = router.isReady;

  const execLogout = () => {
    logout()
    if (isReady) {
      router.push("/");
    }
  }
  return (
    <AppBar position="static">
      <Toolbar sx={Style.header.toolBar}>
        <Link href="/">
          <Typography component="span" sx={Style.header.toolBar.title}>
            Planing Poker
          </Typography>
        </Link>
        <Box>
          {isAuthenticated && (
            <Box sx={Style.header.right.container}>
              <Box
                onClick={() => setIsClicked(!isClicked)}
                sx={Style.header.right.profile.container}
              >
                {user?.picture && (
                  <Image
                    src={user.picture}
                    alt="header-icon"
                    width={50}
                    height={50}
                  />
                )}
                <Typography component="span">{user?.name}</Typography>
                <Icon icon={arrowDropDown} width={40} />
              </Box>
              <Box
                sx={{
                  ...Style.header.right.logout.container,
                  ...(isClicked ? Style.header.right.logout.visible : {}),
                }}
              >
                <Button
                  color="inherit"
                  onClick={() => {
                    execLogout()
                  }}
                >
                  Logout
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
