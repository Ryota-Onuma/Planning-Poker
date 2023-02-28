import User from "@/components/pages/user/signin";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

const UserSigninPage = () => {
  return <User />;
};

export default UserSigninPage;
