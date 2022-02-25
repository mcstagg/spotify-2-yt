import { getSession, GetSessionParams, useSession } from "next-auth/react";
import Head from 'next/head';
import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const { data: session, status } = useSession();

  console.log("CLIENT SESSION IS >>> ", session);

  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="overflow-hidden scrollbar-hide flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}