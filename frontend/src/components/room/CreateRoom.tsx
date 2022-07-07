import {
  Button,
  Container,
  Stack,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { CreateRoomStyle } from "./style";

import { SubmitHandler, useForm } from "react-hook-form";

interface RoomFormInput {
  name: string;
}

export const CreateRoom = () => {
  const { register, handleSubmit } = useForm<RoomFormInput>();
  const onSubmit: SubmitHandler<RoomFormInput> = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    console.log(data);
  };
  return (
    <Container sx={CreateRoomStyle.container}>
      <Box>
        <Typography variant="h3" align="center" sx={{ my: 3 }}>
          ルームを作成する
        </Typography>
      </Box>
      <Box sx={CreateRoomStyle.formContainer}>
        <TextField
          id="filled-basic"
          label="ルーム名"
          variant="filled"
          {...register("name")}
          sx={CreateRoomStyle.form}
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
          sx={CreateRoomStyle.submitButton}
        >
          ルームを作成する
        </Button>
      </Box>
    </Container>
  );
};
