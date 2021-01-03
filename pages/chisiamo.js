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

        <p>
        D’Avena Tartufi è sinonimo di qualità e professionalità. Da oltre 25 anni specia-
lizzati nel settore del luxury food e nella commercializzazione e produzione di

tartufi freschi e preparati a base di tartufo, lavoriamo grossi quantitativi prove-
nienti direttamente dai nostri “cavatori” e selezionatori di fiducia sparsi in tutto

il mondo.

Il commercio di questo nobile prodotto inizia grazie al padre di Marko. Cedo, in-
fatti, affianca alla propria attività nella grande distribuzione la vendita di tartufi

freschi provenienti dalla vicina regione dell’Istria. La passione e la conoscenza
viene ben presto trasmessa al figlio Marko, il quale agli inizi del nuovo secolo si

sostituisce al padre nella compravendita e nella distribuzione, ampliando la scel-
ta e le tipologie di prodotti offerti.

D’Avena diventa così in pochi anni leader nel mondo per la commercializzazione
del tartufo fresco, ancora adesso core business dell’azienda. Marko però nella
sua instancabile vena di imprenditorialità capisce che bisogna allargare la scelta
e la gamma dei prodotti e, nel 2016, decide di iniziare la sperimentazione per la
produzione di preparati a base di tartufo: nasce così nel 2019, dopo tre lunghi

anni di test, la linea food di salse, creme, olio, formaggi, salame e dolci al tartu-
fo.

Attualmente esportiamo il prodotto fresco e quello preparato in tutto il mondo.
Attraverso i nostri distributori radicati sul territorio siamo in grado di consegnare
in tempi brevissimi piccoli e grossi quantitativi mantenendo intatte le qualità
organolettiche e la freschezza dei nostri tartufi.
La nostra è una scelta orientata su tradizione ed innovazione, conservando le

radici e le proprietà del prodotto di origine per giungere alla lavorazione con me-
todi e tecnologie alimentari all’avanguardia che permettano di conservare purez-
za, proprietà e benefici del prodotto fresco.
        </p>
      </div>
    )
  }