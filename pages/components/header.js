import Head from 'next/head'
import Navigation from './navigation'
import Link from 'next/link'


export default function Header() {
    return (
      <div>
          <header className="bg-hero-home bg-no-repeat bg-center bg-cover">
            <Navigation></Navigation>
            <h2 
                className="md:hidden text-base px-5 pb-5 -mt-5 fill-current text-white"
            >
                Tartufo fresco tutto l'anno
            </h2>
            <img
              className="mx-auto h-44 w-44 -mb-24 md:mb-0 md:flex md:mx-auto md:h-52 md:w-52 z-40 relative"
              src="https://res.cloudinary.com/niknet/image/upload/v1609029132/davena%20tartufi/logo_1.0_ytchyw.png"
              alt="logo icon"
            />
            <h2 
                className="hidden md:flex md:justify-center text-4xl px-5 pb-2 pt-6 fill-current text-white"
            >
                <span className="text-davena">D'Avena</span> Tartufi
            </h2>
            <h2 
                className="hidden md:flex md:justify-center text-xl px-5 pb-10 fill-current text-white"
            >
                Tartufo fresco tutto l'anno
            </h2>

            <div className="grid grid-cols-2 z-auto">
                <div className="border-b-2 border-r h-4 border-davena"></div>
                <div className="border-b-2 border-l h-4 border-davena"></div>
            </div>

          </header>
      </div>
    )
  }