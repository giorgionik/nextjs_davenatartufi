import Head from "next/head"
import Link from 'next/link'



  let client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  export async function getStaticProps() {
      let data = await client.getEntries({
          content_type: 'product'
      })
      return {
          props: {
              products: data.items,
          },
          revalidate: 1,
      };
  }
  export default function Prodotti({products}) {
      console.log(products)
    return (
        <div>

            <ul>
                {products.map(product => (
                    <li key={product.sys.id}>
                    <Link href={"/prodotti/" + product.fields.slug }>
                        <a>{product.fields.nomeProdotto}</a>
                    </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
  }


