import User from "@/components/pages/user/signin";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

const UserSigninPage = () => {
  const router = useRouter();
  const isReady = router.isReady;
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isLoading && isAuthenticated && isReady) {
    router.push("/");
    return;
  }

  return <User />;
};

export default UserSigninPage;
