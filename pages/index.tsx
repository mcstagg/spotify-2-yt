import { getSession, GetSessionParams, useSession } from "next-auth/react";
import Html from 'next/document';
import Head from 'next/head';
import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const { data: session, status } = useSession();

  console.log("CLIENT SESSION IS >>> ", session);

  return (
    <div className="bg-black h-screen overflow-hidden">
      <html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <title>Spotify 2.0</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="image" property="og:image" content="%PUBLIC_URL%/spotify.jpg"/>
        <meta property="og:title" content="Spofify Lookin' Fly"/>
        <meta name="author" content="Mike Stagg" />
        <meta property="og:description" content="This is a Spotify Clone"/>
        <meta property="og:url" content="https://spotify-2-reproduction.vercel.app"/>
      </Head>

      <main className="overflow-hidden scrollbar-hide flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
      </html>
    </div>
  );
}

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}