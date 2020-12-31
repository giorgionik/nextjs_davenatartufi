import Head from 'next/head'
import React, { useState } from 'react'
import Header from './components/header'
import SimpleSlider from './components/carousel'
import Link from 'next/link'

export default function Home() {

  

  return (
    <div>
      <Head>
        <title>D'Avena Tartufi</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <Header></Header>
      <div className="bg-darker pb-10">
        <div className="bg-darker pt-20 md:grid md:grid-cols-2">
          <div className="px-5 md:pl-0 md:col-start-2">
            <div className="border-l-2 border-davena pl-7 pb-5">
              <h2 className="text-3xl py-5">Chi siamo</h2>
              <p className="mini:text-base text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>

          <div className="bg-darker px-10 md:px-10 py-10 md:pt-0 md:py-0 md:col-start-1 md:row-start-1 md:col-span-1">
            <img
              className=""
              src="https://res.cloudinary.com/niknet/image/upload/v1609063080/davena%20tartufi/Screenshot_2020-12-27_at_10.56.33_jemyoj.png"
              alt="marko zobenica ceo"
            />
          </div>
        </div>

        {/* <div className="md:border-2 md:border-davena md:flex md:m-10">
          <div className="px-5">
            <div className="border-r-2 border-davena md:border-none px-5 pb-5">
              <h2 className="text-3xl py-5">I nostri prodotti</h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>

          <img
            className="hidden md:block w-80"
            src="https://res.cloudinary.com/niknet/image/upload/v1609066788/davena%20tartufi/Screenshot_2020-12-27_at_11.59.07_sxpwdf.png"
            alt="Marko Zobenica ceo"
          />
        </div>*/}

      </div> 

      <SimpleSlider></SimpleSlider>
    </div>
  );
}
