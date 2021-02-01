
import React, { useState, useEffect } from 'react';




  export default function Insta() {
    const [term, setTerm] = useState(null);
    const [srch, setSrch] = useState(false);
    const [pic, setPic] = useState(null);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://graph.facebook.com/v9.0/instagram_oembed?url=${srch}&fields=thumbnail_url&access_token=193362812533727|35cbc0402573cd914e6ba11123799c84`, requestOptions)
            .then(res => res.json())
            .then(res => setPic(res.thumbnail_url))
            .catch(error => console.log('error', error));
      }, [srch]);
    return (
    <div>
        <div className="flex justify-center"><h1 className="text-instagrad text-4xl p-10">Instagram oEmbed</h1></div>
        
      <div class="p-8">
        <div class="bg-white flex items-center rounded-full shadow-xl">
          <input
            class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
            <div class="p-4">
              <button
                class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                onClick={() => setSrch(term)}
              >
                trY
              </button>
            </div>
            
          </div>
          </div>
        <img src={pic} className="mx-auto pt-10 pb-10"></img>
    </div>
          
        
      
    );
  }