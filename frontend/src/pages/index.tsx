import Head from "next/head";
import { Inter } from "@next/font/google";
import Top from "@/components/pages/top";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Planning Poker</title>
        <meta name="description" content="Perfect Planning Poker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Top />
      </main>
    </>
  );
}
