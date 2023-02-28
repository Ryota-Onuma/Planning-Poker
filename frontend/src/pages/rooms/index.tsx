import Rooms from "@/components/pages/rooms";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useMemo } from "react";

const RoomsPage = () => {
  const router = useRouter();
  const isReady = router.isReady;
  const { isAuthenticated, isLoading, user } = useAuth0();
  if (!isLoading && !isAuthenticated && isReady) {
    router.push("/user/signin");
    return;
  }

  return <Rooms userID={user?.sub ?? ""} />;
};

export default RoomsPage;
