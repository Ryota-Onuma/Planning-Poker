import { useQuery } from "@apollo/client";
import { gql } from "@/generated/gql";
import { RoomsStyle as Style } from "./style";
import Link from "next/link";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";

import Loading from "@/components/common/loading";

const GET_ROOMS_QUERY = gql(/* GraphQL */ `
  query getRooms($userID: String!) {
    rooms(
      where: { room_users: { user_id: { _eq: $userID } } }
      order_by: { created_at: desc }
    ) {
      id
      name
    }
    users_by_pk(id: $userID) {
      name
    }
  }
`);

export type RoomsProps = { userID: string };
const Rooms = ({ userID }: RoomsProps) => {
  const { data, loading, error } = useQuery(GET_ROOMS_QUERY, {
    variables: { userID },
  });

  const userName = data?.users_by_pk?.name;

  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  return (
    <Box sx={Style.rooms.container}>
      <Typography component="h1" sx={Style.rooms.title}>
        {userName}さんの参加しているルーム一覧
      </Typography>
      <TableContainer component={Paper} sx={Style.rooms.table.container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.rooms.map((room) => {
              return (
                <TableRow key={room.id}>
                  <TableCell align="center">{room.id}</TableCell>
                  <TableCell align="center">{room.name}</TableCell>
                  <TableCell align="center" sx={Style.rooms.table.cell}>
                    <Link href={`/room/play/${room.id}`}>
                      <Button variant="outlined">Play</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Rooms;
