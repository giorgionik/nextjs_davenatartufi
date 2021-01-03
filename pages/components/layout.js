import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>My Next.js Static Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>
          <Link href="/">
            <a>Next.JS + Contentful + Vercel = ❤️</a>
          </Link>
        </h1>
      </header>
      <main>{children}</main>

    </div>
  )
}