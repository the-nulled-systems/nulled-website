import Head from "next/head";
import React from "react";

export default function Home({}) {
  return (
    <div className="grid h-screen place-items-center font-mono from-stone-800">
      <Head>
        <title>the nulled systems</title>
        <meta name="description" content="the nulled systems inc." />
      </Head>
      <img
        className="max"
        src="https://cdn.discordapp.com/icons/990998135335698514/f1d349333bfb296e068fca9c7a643963.webp?size=320"
        alt=""
      />
      <h1 className="text-8xl font-bold">the nulled systems</h1>
      <iframe
        src="https://discord.com/widget?id=990998135335698514&theme=dark"
        width="350"
        height="500"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}
