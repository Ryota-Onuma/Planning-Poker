import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";

import { AuthorizedApolloProvider } from "@/providers/apollo";

import Header from "@/components/common/header";
import { Auth0Provider } from "@auth0/auth0-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ""}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT ?? ""}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: `${process.env.NEXT_PUBLIC_ORIGIN}/user/signin`,
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
      }}
    >
      <AuthorizedApolloProvider>
        <>
          <Header />
          <Component {...pageProps} />
        </>
      </AuthorizedApolloProvider>
    </Auth0Provider>
  );
}
