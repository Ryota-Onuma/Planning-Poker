import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { style } from "./style";
import Link from "next/link";

type Room = Record<"name" | "description", string>;
type RoomListProps = {
  Rooms: Room[];
};

export const RoomList = (props: RoomListProps) => {
  return (
    <Container>
      <Box sx={style.tableContainer}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rooms &&
                props.rooms.map((room, i) => (
                  <Link href={`/room/${room.id}`}>
                    <TableRow
                      key={`${room.name}${i}`}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{room.id}</TableCell>
                      <TableCell align="center">{room.name}</TableCell>
                    </TableRow>
                  </Link>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};
