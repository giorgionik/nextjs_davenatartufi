import Head from "next/head"
import Link from 'next/link'
import Pageheader from './components/pageheader'

import Footer from './components/footer'



let client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

  export async function getStaticProps() {
      let data = await client.getEntries({
          'content_type': 'product',
 

      })
     
      return {
          props: {
              products: data.items,
          },
          
          revalidate: 1,
      };
  }
  export default function Prodotti({products}) {
     
    return (
        <div>
        <Head>
          <title>D'Avena Tartufi - Prodotti</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Pageheader></Pageheader>
        <div className="max-w-screen-lg mx-auto md:mt-4 pt-5 pr-5 mt-18">
            <h2 className="font-playfair text-4xl font-medium text-gray-700 pl-10 pt-20 pb-4 md:pb-8">Prodotti</h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {products.map(product => (
              <div
              key={product.sys.id}
              className="focus:outline-none"
            >
              <div className="text-center p-8 md:p-6">
                <div className="mb-2">
                  <img
                    className="rounded-full h-auto w-auto"
                    src={`https:${product.fields.foto.fields.file.url}`}
                    alt={product.fields.foto.fields.title}
                  />
                </div>
                <Link href={"/prodotti/" + product.fields.slug}>
                  <a>
                    <h2 className="font-sourcesans text-xl pt-2 font-medium text-gray-700">
                      {product.fields.nomeProdotto}
                    </h2>
                  </a>
                </Link>
              </div>
            </div>
                    
                ))}
            
            </div>
            </div>
            <Footer></Footer> 
        </div>
    )
  }


