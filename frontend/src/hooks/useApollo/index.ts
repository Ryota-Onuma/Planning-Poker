import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from "@apollo/client";
import { useMemo } from "react";
import { WebSocket } from "ws";
import { useAuth0 } from "@auth0/auth0-react";

import { useAuthLink } from "./links/useAuthLink";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export const useApollo = () => {
    const role = "user"
    const { getAccessTokenSilently } = useAuth0();
   
    const authLink = useAuthLink();
    const httpLink = createHttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
    });
  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(
          createClient({
            url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_WS,
            webSocketImpl: WebSocket,
              connectionParams: async () => {
                const token =  await getAccessTokenSilently();
                return ({
                headers: {
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    "x-hasura-role": role,
                }
              })},
      
          })
        )
      : httpLink;

  const mergedLink =
    typeof window !== "undefined" && wsLink != null
      ? split(
          ({ query }) => {
            const def = getMainDefinition(query);
            return (
              def.kind === "OperationDefinition" &&
              def.operation === "subscription"
            );
          },
          wsLink,
          httpLink
        )
      : httpLink;
  const link = ApolloLink.from([authLink, mergedLink]);
  return useMemo(() => initializeApollo(link), [link]);
};

const initializeApollo = (link: ApolloLink) => {
  const _apolloClient = apolloClient ?? createApolloClient(link);
  if (!apolloClient) apolloClient = _apolloClient;

  return createApolloClient(link);
};

const createApolloClient = (link: ApolloLink) => {
  return new ApolloClient({
    link,
    cache: new InMemoryCache({
      typePolicies: {
        query_root: {
          queryType: true,
        },
        mutation_root: {
          mutationType: true,
        },
      },
    }),
  });
};
