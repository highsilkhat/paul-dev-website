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
        <title>Paul Lee | Senior DevOps Engineer</title>
        <meta
          name="description"
          content="Paul Lee is a CKAD and AZ-204 certified Senior DevOps Engineer specializing in Kubernetes, Cloud Infrastructure, and DevOps practices like ArgoCD and Helm."
        />
        <meta
          name="keywords"
          content="Paul Lee, DevOps Engineer, Senior DevOps Engineer, CKAD, AZ-204, Kubernetes, ArgoCD, Helm, GitHub Migration, Cloud Infrastructure, Seattle"
        />
        <meta name="author" content="Paul Lee" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paullee.me/" />
        <meta property="og:title" content="Paul Lee | Senior DevOps Engineer" />
        <meta
          property="og:description"
          content="CKAD and AZ-204 certified Senior DevOps Engineer specializing in Kubernetes, ArgoCD, and Helm."
        />
        <meta property="og:image" content="https://paullee.me/ferryOnSound.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://paullee.me/" />
        <meta property="twitter:title" content="Paul Lee | Senior DevOps Engineer" />
        <meta
          property="twitter:description"
          content="CKAD and AZ-204 certified Senior DevOps Engineer specializing in Kubernetes, ArgoCD, and Helm."
        />
        <meta property="twitter:image" content="https://paullee.me/ferryOnSound.png" />

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
