import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

export const useAuthLink = () => {
  const { getAccessTokenSilently } = useAuth0();
  return setContext(async (_, { headers, ...context }) => {
    const token = await getAccessTokenSilently();
    const role = "user";

    return {
      headers: {
        ...headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        "x-hasura-role": role,
      },
      connectionParams: {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          "x-hasura-role": role,
        },
      },
      ...context,
    };
  });
};
