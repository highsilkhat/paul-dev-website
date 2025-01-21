import Head from 'next/head'
import React from "react";

// @ts-ignore
const BaseLayout: React.FC<{children?: React.ReactNode}> = ({ children }) => {
  return (
    <div
      className="
      font-sans
      bg-gradient-to-b from-sky-blue via-sunset-yellow to-sea-blue
      w-full
      min-h-screen
    "
    >
      <Head>
        <title>Paul Lee</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {children}
    </div>
  )
}

export default BaseLayout
