import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring'


export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false);


    const maskTransitions = useTransition(showMenu, null, {
      from: { position: "absolute", opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
    const menuTransitions = useTransition(showMenu, null, {
      from: { opacity: 0, transform: 'translateX(-100%)'},
      enter: { opacity: 1, transform: 'translateX(0%)' },
      leave: { opacity: 0, transform: 'translateX(-100%)' },
    });


    return (
      <div>
        <nav className="flex items-center justify-between md:justify-center">
          <h1 className="font-playfair text-white text-4xl mx-5 md:hidden mini:text-2xl">
            <span className="text-davena">D'Avena</span> Tartufi
          </h1>

          <ul className="hidden md:flex md:w-4/6 md:justify-between md:mt-1 md:mb-20 text-white text-xl font-sourcesans">
            <li className="border-2 border-davena p-2 my-8">Home</li>
            <li className="border-2 border-davena p-2 my-8">Chi siamo</li>
            <li className="border-2 border-davena p-2 my-8">Prodotti</li>
            <li className="border-2 border-davena p-2 my-8">Contatto</li>
          </ul>
          <button
            className="focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              className="md:hidden h-12 w-12 m-6"
              src="../SVG/hamburger.svg"
              alt="burger icon"
            />
          </button>

          {maskTransitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div
                  key={key}
                  style={props}
                  className="fixed bg-black-t-50 top-0 left-0 w-screen h-screen z-50"
                  onClick={() => setShowMenu(false)}
                ></animated.div>
              )
          )}
          {menuTransitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div
                  key={key}
                  style={props}
                  className="fixed bg-white top-0 left-0 w-4/6 h-full z-50 shadow p-3"
                >
                  <ul className="pt-5 text-2xl">
                    <li className="pb-3">
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className="pb-3">
                      <Link href="/chisiamo">
                        <a>Chi siamo</a>
                      </Link>                      
                    </li>
                    <li className="pb-3">
                      <Link href="/prodotti">
                        <a>Prodotti</a>
                      </Link>  
                    </li>
                    <li className="pb-3">
                    <Link href="/contatto">
                        <a>Contatto</a>
                    </Link>                       
                    </li>
                  </ul>
                </animated.div>
              )
          )}
        </nav>
      </div>
    );
  }