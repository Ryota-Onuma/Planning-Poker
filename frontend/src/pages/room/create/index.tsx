import Room from "@/components/pages/room/create";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

const RoomCreatePage = () => {
  const router = useRouter();
  const isReady = router.isReady;
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isLoading && !isAuthenticated && isReady) {
    router.push("/");
    return;
  }
  return <Room />;
};

export default RoomCreatePage;
