import Head from 'next/head'
import Link from 'next/link'
import Pageheader from './components/pageheader'
import Footer from './components/footer'


export default function Chisiamo() {
    return (
      <div>
        <Head>
          <title>D'Avena Tartufi - Chi siamo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Pageheader></Pageheader>
        <div className="max-w-screen-lg mx-auto mt-20 ">





          <div className="bg-darker md:grid md:grid-cols-2 md:mt-10 md:pt-20 ">
    <div className="pt-1 px-5 md:pl-0 md:col-start-2 md:mb-10">
        <div className="border-l-2 border-davena pl-7 pb-5 ">
        <h2 className="font-playfair text-4xl font-medium text-gray-700 py-5">Chi siamo</h2>
            <p className="font-sourcesans mini:text-base text-xl font-medium text-gray-700 pt-5">
              D’Avena Tartufi è sinonimo di qualità e professionalità. Da oltre 25
              anni specia- lizzati nel settore del luxury food e nella
              commercializzazione e produzione di tartufi freschi e preparati a base
              di tartufo, lavoriamo grossi quantitativi provenienti direttamente
              dai nostri “cavatori” e selezionatori di fiducia sparsi in tutto il
              mondo. Il commercio di questo nobile prodotto inizia grazie al padre
              di Marko. Cedo, infatti, affianca alla propria attività nella grande
              distribuzione la vendita di tartufi freschi provenienti dalla vicina
              regione dell’Istria.
            </p>


        </div>
    </div>
    <div className="pt-10 bg-darker px-10 md:px-10 py-5 md:pt-16 md:py-0 md:col-start-1 md:row-start-1 md:col-span-1">
      <img
        className="rounded-full"
        src="https://res.cloudinary.com/niknet/image/upload/v1609704574/davena%20tartufi/tartufi_mx7ksw.jpg"
        alt="prodotti al tartufo davena"
      />
    </div>
    </div> 









    <div className="bg-darker md:grid md:grid-cols-2 md:mt-10 ">
    <div className="pt-1 px-5 md:pl-0 md:col-start-1 md:mb-10">
        <div className="border-l-2 border-davena pl-7 pb-5 ">
        <h2 className="font-playfair text-4xl font-medium text-gray-700 py-5">Passione</h2>
            <p className="font-sourcesans mini:text-base text-xl font-medium text-gray-700 pt-5">
              La passione e la conoscenza viene ben presto
              trasmessa al figlio Marko, il quale agli inizi del nuovo secolo si
              sostituisce al padre nella compravendita e nella distribuzione,
              ampliando la scel- ta e le tipologie di prodotti offerti. D’Avena
              diventa così in pochi anni leader nel mondo per la commercializzazione
              del tartufo fresco, ancora adesso core business dell’azienda. Marko
              però nella sua instancabile vena di imprenditorialità capisce che
              bisogna allargare la scelta e la gamma dei prodotti e, nel 2016,
              decide di iniziare la sperimentazione per la produzione di preparati a
              base di tartufo: nasce così nel 2019, dopo tre lunghi anni di test, la
              linea food di salse, creme, olio, formaggi, salame e dolci al tartu-
              fo. Attualmente esportiamo il prodotto fresco e quello preparato in
              tutto il mondo.
            </p>


        </div>
    </div>
    <div className="pt-10 bg-darker px-10 md:px-10 py-5 md:pt-16 md:py-0 md:col-start-2 md:row-start-1 md:col-span-1">
      <img
        className="rounded-full"
        src="https://res.cloudinary.com/niknet/image/upload/v1609704371/davena%20tartufi/formaggio_g2qzqg.jpg"
        alt="formaggio al tartufo"
      />
    </div>
    </div> 





    <div className="bg-darker md:grid md:grid-cols-2 md:mt-10 ">
    <div className="pt-1 px-5 md:pl-0 md:col-start-2 md:mb-10">
        <div className="border-l-2 border-davena pl-7 pb-5 ">
        <h2 className="font-playfair text-4xl font-medium text-gray-700 py-5">Tradizione</h2>
            <p className="font-sourcesans mini:text-base text-xl font-medium text-gray-700 pt-5">
              Attraverso i nostri distributori radicati sul
              territorio siamo in grado di consegnare in tempi brevissimi piccoli e
              grossi quantitativi mantenendo intatte le qualità organolettiche e la
              freschezza dei nostri tartufi. La nostra è una scelta orientata su
              tradizione ed innovazione, conservando le radici e le proprietà del
              prodotto di origine per giungere alla lavorazione con me- todi e
              tecnologie alimentari all’avanguardia che permettano di conservare
              purezza, proprietà e benefici del prodotto fresco.
            </p>

 

        </div>
    </div>
    <div className="pt-10 bg-darker px-10 md:px-10 py-5 md:pt-16 md:py-0 md:col-start-1 md:row-start-1 md:col-span-1">
      <img
        className="rounded-full"
        src="https://res.cloudinary.com/niknet/image/upload/v1609704761/davena%20tartufi/tradizione_evrucg.jpg"
        alt="davena tartufi tradizione"
      />
    </div>
    </div> 




        </div>
        <Footer></Footer>
      </div>
    );
  }