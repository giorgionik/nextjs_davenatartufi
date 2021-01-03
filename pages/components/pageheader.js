import Head from 'next/head'
import Navigation from './navigation'
import Link from 'next/link'


export default function Pageheader() {
    return (
      <div>
          <header className="bg-hero-home mini:bg-hero-home-mini bg-no-repeat bg-center bg-cover">
            <div className="max-w-screen-lg mx-auto">
                <Navigation></Navigation>
                <h2 
                    className="md:hidden text-base px-5 pb-5 -mt-5 fill-current text-white"
                >
                    Tartufo fresco tutto l'anno
                </h2>
                <img
                className="mx-auto h-44 w-44 -mb-24 md:-mb-28 md:flex md:mx-auto md:h-52 md:w-52 z-40 relative"
                src="https://res.cloudinary.com/niknet/image/upload/q_auto:low/v1609429670/davena%20tartufi/logo_1.0_comp_a5tgju.png"
                alt="logo icon"
                />

            </div>
            <div className="grid grid-cols-2 z-auto">
                <div className="border-b-2 border-r h-4 border-davena"></div>
                <div className="border-b-2 border-l h-4 border-davena"></div>
            </div>
            
          </header>
      </div>
    )
  }