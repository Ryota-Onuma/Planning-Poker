import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Loading from "@/components/common/loading";
import * as z from "zod";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import { useMutation } from "@apollo/client";
import { gql } from "@/generated/gql";

import { RoomStyle as Style } from "./style";
import router from "next/router";

const room = z.object({
  name: z
    .string()
    .min(3, { message: "!! ルームの名前は3文字以上でお願いします" })
    .max(50, { message: "!! ルームの名前は50文字以下でお願いします" }),
});

type RoomSchema = z.infer<typeof room>;

const CREATE_ROOM = gql(/* GraphQL */ `
  mutation createRoom($name: String!) {
    insert_rooms(objects: { name: $name }) {
      returning {
        id
      }
    }
  }
`);

const Room = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RoomSchema>({
    resolver: zodResolver(room),
    defaultValues: {
      name: "",
    },
  });

  const [createRoom, { loading, error }] = useMutation(CREATE_ROOM);

  const onClick: SubmitHandler<RoomSchema> = async (roomData: RoomSchema) => {
    const { name } = roomData;
    const { data } = await createRoom({ variables: { name } });

    const id = data?.insert_rooms?.returning[0].id;
    router.push(`/room/play/${id}`);
  };

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <Box sx={Style.room.container}>
      <Typography component="h1" sx={Style.room.title}>
        ルームを作成する
      </Typography>
      <Paper
        component="form"
        onSubmit={handleSubmit(onClick)}
        sx={Style.room.form.container}
        elevation={3}
      >
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <FormControl
              error={fieldState.invalid}
              sx={Style.room.form.controll}
            >
              <FormLabel id="room-name">ルームの名前</FormLabel>
              <FormHelperText sx={Style.room.form.errorNotify}>
                {fieldState.error?.message}
              </FormHelperText>
              <TextField
                {...field}
                aria-labelledby="room-name"
                type="text"
                error={fieldState.invalid}
                placeholder="ルームの名前(50文字まで)"
              />
            </FormControl>
          )}
        />
        <Box sx={Style.room.form.button.container}>
          <Button variant="contained" type="submit">
            作成
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Room;
