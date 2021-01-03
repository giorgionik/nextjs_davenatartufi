import Head from 'next/head'
import React, { useState } from 'react'
import Header from './components/header'
import SimpleSlider from './components/carousel'
import Footer from './components/footer'
import Link from 'next/link'

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
    let data = await client.getEntries({
        'content_type': 'product',
        'fields.primoPiano': 'true',

    })
   
    return {
        props: {
            products: data.items,
        },
        
        revalidate: 1,
    };
}


export default function Home({products}) {


  return (
    <div>
      <Head>
        <title>D'Avena Tartufi</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet"/>
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
      <div className="max-w-screen-lg mx-auto">
      <div className="bg-darker">
        <div className="bg-darker pt-20 md:grid md:grid-cols-2">
          <div className="pt-10 px-5 md:pl-0 md:col-start-2  md:mb-10">
            <div className="border-l-2 border-davena pl-7 pb-5">
              <h2 className="font-playfair text-4xl py-5">Chi siamo</h2>
              <p className="font-sourcesans mini:text-base text-xl font-medium text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="flex font-sourcesans text-xl">
                <div className="flex-initial border-2 border-davena p-2 my-8 font-medium text-gray-700">
                    <Link href="/chisiamo">
                        <a>Leggi di più</a>
                    </Link>  
                </div>
              </div>
            </div>
          </div>

          <div className="bg-darker px-10 md:px-10 py-10 md:pt-0 md:py-0 md:col-start-1 md:row-start-1 md:col-span-1">
            <img
              className=""
              src="https://res.cloudinary.com/niknet/image/upload/v1609618833/davena%20tartufi/marko_zobenica_pzvpmq.jpg"
              alt="marko zobenica ceo"
            />
          </div>
        </div>

        {/* <div className="md:border-2 md:border-davena md:flex md:m-10 md:my-10">
          <div className="px-5">
            <div className="border-r-2 border-davena md:border-none px-5 pb-5">
              <h2 className="font-playfair text-4xl py-5">I nostri prodotti</h2>
              <p className="font-sourcesans mini:text-base text-xl font-medium text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="flex font-sourcesans text-xl">
                <div className="flex-initial border-2 border-davena p-2 my-8 font-medium text-gray-700">
                    <Link href="/prodotti">
                        <a>I nostri prodotti</a>
                    </Link>  
                </div>
              </div>
            </div>
          </div>

          <img
            className="hidden md:block w-80"
            src="https://res.cloudinary.com/niknet/image/upload/v1609066788/davena%20tartufi/Screenshot_2020-12-27_at_11.59.07_sxpwdf.png"
            alt="Marko Zobenica ceo"
          />
        </div> */}
      <div className="py-8 md:px-10 md:py-10 md:bg-olio md:bg-right-top md:bg-no-repeat md:bg-60% md:my-20">
        <div className="md:grid md:grid-cols-2 md:border-2 md:border-davena">
          <div>
          <h2 className="font-playfair text-4xl px-10 md:pt-10">I nostri prodotti</h2>
          <p className="font-sourcesans mini:text-base text-xl font-medium text-gray-700 p-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <div className="flex font-sourcesans text-xl ml-10">
                <div className="flex-initial border-2 border-davena p-2 mb-8 font-medium text-gray-700">
                    <Link href="/prodotti">
                        <a>I nostri prodotti</a>
                    </Link>  
                </div>
              </div>
          </div>
          <div></div>
        </div>
      </div>

      </div> 

      <SimpleSlider prodotti={products}></SimpleSlider>


      </div>
      <Footer></Footer>
    </div>
    
  );
}
