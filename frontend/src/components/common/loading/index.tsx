import CircularProgress from "@mui/material/CircularProgress";
import { LoadingStyle as Style } from "./style";
import { Box } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={Style.loading.container}>
      <CircularProgress />
    </Box>
  );
};
export default Loading;
