import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/hooks/useApollo";

type AuthorizedApolloProviderProps = {
  children: React.ReactNode;
};

export const AuthorizedApolloProvider: React.FC<
  AuthorizedApolloProviderProps
> = ({ children }) => {
  const client = useApollo();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
