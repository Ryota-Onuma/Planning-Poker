import RoomChoose from "@/components/pages/room/choose";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

const RoomChoosePage = () => {
  const router = useRouter();
  const isReady = router.isReady;
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isLoading && !isAuthenticated && isReady) {
    router.push("/");
    return;
  }
  return <RoomChoose />;
};

export default RoomChoosePage;
