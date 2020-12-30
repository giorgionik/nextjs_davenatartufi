import Head from 'next/head'
import Link from 'next/link'
import Header from './components/header'


export default function Home() {
    return (
      <div>
        <Head>
          <title>D'Avena Tartufi - Chi siamo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header></Header>
      </div>
    )
  }