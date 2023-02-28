import { RoomChooseStyle as Style } from "./style";
import { Box, Typography, Button, Paper } from "@mui/material";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

const RoomChoose = () => {
  return (
    <Box sx={Style.room.container}>
      <Typography component="h1" sx={Style.room.title}>
        ルームに参加しましょう
      </Typography>
      <Paper elevation={3} sx={Style.room.menu.container}>
        <Box sx={Style.room.menu.createRoom.container}>
          <Typography component="h2" sx={Style.room.menu.createRoom.title}>
            ルームを作成する
          </Typography>
          <Link href="/room/create">
            <Button variant="contained">作成ページに移動</Button>
          </Link>
        </Box>
        <Box sx={Style.room.menu.joinRoom.container}>
          <Typography component="h2" sx={Style.room.menu.joinRoom.title}>
            既存のルームに参加する
          </Typography>
          <Link href="/rooms">
            <Button variant="contained">ルームの一覧ページに移動</Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};
export default RoomChoose;
