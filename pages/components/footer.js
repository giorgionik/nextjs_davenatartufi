import Head from 'next/head'
import Navigation from './navigation'
import Link from 'next/link'


export default function Footer() {
    return (
      <div className="bg-footer-home mini:bg-footer-home-mini bg-no-repeat bg-center bg-cover mt-20 ">
          <div className="max-w-screen-lg mx-auto px-10 py-20 mini:text-base text-xl font-thin text-white">
            <h2 className="text-3xl font-playfair py-5"><span className="text-davena">D'Avena</span> Tartufi</h2>
            <p className="font-thin text-xl ">
                <span className="pr-5">
            <img
              className="h-5 w-5 inline-block"
              src="../SVG/phone.svg"
              alt="burger icon"
            />
            </span>
                003484143946
            </p>
            <p className="font-thin text-xl ">
            <span className="pr-5">
            <img
              className="h-5 w-5 inline-block"
              src="../SVG/mail.svg"
              alt="burger icon"
            />
            </span>
                info@davenatartufi.com
            </p>
          </div>
      </div>
    )
  }