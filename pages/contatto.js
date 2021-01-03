// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.
import Pageheader from './components/pageheader'
import Head from 'next/head'
import Footer from './components/footer'
import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div>
        <Head>
          <title>D'Avena Tartufi - Contatto</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Pageheader></Pageheader>
        <div className="max-w-screen-lg mx-auto md:mt-4 pt-5 pr-5">


        <div className="bg-darker md:grid md:grid-cols-2 md:mt-10 ">
            <div className="pt-10 px-5 md:pl-0 md:col-start-2 md:mb-10">
                <div className="border-l-2 border-davena pl-7 pb-5 mt-10">
                    <h2 className="font-playfair text-4xl font-medium text-gray-700 pt-10 pb-4">Contatto</h2>
                    <p className="ont-sourcesans mini:text-base text-xl font-normal text-gray-700">Telefono: 003484143946</p>
                    <p className="ont-sourcesans mini:text-base text-xl font-normal text-gray-700">Email: info@davenatartufi.com</p>
                    <form
                        onSubmit={this.submitForm}
                        action="https://formspree.io/f/xoqpprop"
                        method="POST"
                    >
                        <label className="block text-xs font-semibold text-gray-600 uppercase pt-5">
                            Name:
                        </label>
                        <input type="text" name="name" placeholder="Nome" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"/>
                        <label className="block text-xs font-semibold text-gray-600 uppercase pt-5">Email:</label>
                        <input type="email" name="email" placeholder="Email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"/>
                        <label className="block text-xs font-semibold text-gray-600 uppercase pt-5">Messaggio:</label>
                        <textarea type="textarea" name="message" placeholder="Messaggio" className="rows='3' block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"/>
                        {status === "SUCCESS" ? <p className="py-5 text-green-600">Messaggio inviato, Grazie!</p> : <button className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">Invia</button>}
                        {status === "ERROR" && <p className="py-5 text-red-600">Ooops! There was an error.</p>}
                    </form>
                </div>
            </div>
            <div className="bg-darker px-10 md:px-10 py-10 md:pt-16 md:py-0 md:col-start-1 md:row-start-1 md:col-span-1">
              <img
                className=""
                src="https://res.cloudinary.com/niknet/image/upload/v1609698062/davena%20tartufi/contatto_wlbuu5.jpg"
                alt="contatto collaborazione tartufi"
              />
            </div>
        </div>  
        </div>
        <Footer></Footer>    
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
            
  }
  
}


