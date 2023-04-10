import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Script from "next/script";
import React from "react";

// Use dynamic import to avoid page hydrated.
// reference: https://github.com/pmndrs/zustand/issues/1145#issuecomment-1316431268
const ConnectionSidebar = dynamic(() => import("@/components/ConnectionSidebar"), {
  ssr: false,
});
const ConversationView = dynamic(() => import("@/components/ConversationView"), {
  ssr: false,
});
const QueryDrawer = dynamic(() => import("@/components/QueryDrawer"), {
  ssr: false,
});

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SQL Chat</title>
        <link rel="icon" href="/chat-logo-bot.webp" />
        <meta name="description" content="" />
      </Head>

      <h1 className="sr-only">SQL Chat</h1>

      <main className="w-full h-full flex flex-row">
        <ConnectionSidebar />
        <ConversationView />
        <QueryDrawer />
      </main>

    </div>
  );
};

export default IndexPage;
