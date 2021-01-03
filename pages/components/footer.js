import Head from 'next/head'
import Navigation from './navigation'
import Link from 'next/link'


export default function Footer() {
    return (
      <div className="bg-footer-home mini:bg-footer-home-mini bg-no-repeat bg-center bg-cover mt-20 ">
          <div className="max-w-screen-lg mx-auto px-10 py-20 mini:text-base text-xl font-thin text-white">
            <h2 className="text-3xl font-playfair"><span className="text-davena">D'Avena</span> Tartufi</h2>
            <p className="font-thin text-xl ">003484143946</p>
            <p className="font-thin text-xl ">info@davenatartufi.com</p>
          </div>
      </div>
    )
  }