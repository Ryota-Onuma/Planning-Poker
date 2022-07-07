import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "next/link";
import { style } from "./style";

export const Home = () => {
  return (
    <Container sx={style.container}>
      <Link href="/rooms/create">
        <Button variant="contained">Roomを作る</Button>
      </Link>
    </Container>
  );
};
