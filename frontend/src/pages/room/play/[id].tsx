import IndividualRoom from "@/components/pages/room/individual";
import { getAsString } from "@/utils/func";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

const RoomPlayPage = () => {
  const router = useRouter();
  const isReady = router.isReady;
  const { user } = useAuth0();
  if (!user?.sub && isReady) {
    const id = getAsString(router.query.id ?? "");
    router.push(`/user/signin?redirect_url=${id}`);
    return;
  }

  const id = getAsString(router.query.id ?? "");

  return <IndividualRoom id={id} userID={user?.sub ?? ""} />;
};

export default RoomPlayPage;
