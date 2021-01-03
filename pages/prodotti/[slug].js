import Pageheader from '../components/pageheader'
import Head from 'next/head'
import Footer from '../components/footer'
import React from "react";

let client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

export async function getStaticPaths(){
    let data = await client.getEntries({
        content_type: 'product'
    })

    return {
        paths: data.items.map(item => ({
            params: { slug: item.fields.slug }
        })),
        fallback: true,
    }
}

export async function getStaticProps({ params }){
    let data = await client.getEntries({
        content_type: 'product',
        'fields.slug': params.slug
    })
    return{
        props: {
            product: data.items[0], 
        },
        revalidate: 1,
    };
}

export default function Prodotti({ product }){
    if(!product) return <div>404</div>;

console.log(product.fields.descrizioneProdotto.content[0].content[0].value);
    return (



<div>
<Head>
  <title>D'Avena Tartufi - {product.fields.nomeProdotto}</title>
  <link rel="icon" href="/favicon.ico" />
</Head>


<Pageheader></Pageheader>
<div className="max-w-screen-lg mx-auto md:mt-4 pt-5 pr-5">


<div className="bg-darker md:grid md:grid-cols-2 md:mt-10 ">
    <div className="pt-10 px-5 md:pl-0 md:col-start-2 md:mb-10">
        <div className="border-l-2 border-davena pl-7 pb-5 mt-10">
            <h2 className="font-playfair text-4xl font-medium text-gray-700 pt-10 pb-4">{product.fields.nomeProdotto}</h2>
            <p className="ont-sourcesans mini:text-base text-xl font-normal text-gray-700"><b>{product.fields.categoria}</b></p>
            <p className="ont-sourcesans mini:text-base text-xl font-normal text-gray-700 py-5">{product.fields.descrizioneProdotto.content[0].content[0].value}</p>


            

        </div>
    </div>
    <div className="bg-darker px-10 md:px-10 py-10 md:pt-28 md:py-0 md:col-start-1 md:row-start-1 md:col-span-1">
      <img
        className="rounded-full"
        src={`https:${product.fields.foto.fields.file.url}`}
        alt="marko zobenica ceo"
      />
    </div>
</div>  
</div>
<Footer></Footer>    
</div>




    )

    
}