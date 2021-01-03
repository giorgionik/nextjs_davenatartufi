import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
 

 
export default function SimpleSlider(props) {

    console.log(props.prodotti);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
   
<div className="mx-16">



    <Slider {...settings}>



        {props.prodotti.map(product => (

        <div key={product.sys.id} class="sm:w-1/4 px-8 focus:outline-none">
            
            <div class="px-1 py-6 text-center">
            <div class="mb-2">
                <img
                class="rounded-full h-auto w-auto"
                src={`https:${product.fields.foto.fields.file.url}`}
                alt={product.fields.foto.fields.title}
                />
            </div>
            <Link href={"/prodotti/" + product.fields.slug }>
            <a><h2 class="font-sourcesans text-xl pt-2 font-medium text-gray-700">{product.fields.nomeProdotto}</h2></a>
            </Link>
            </div>
            
        </div>
        ))}


        

    </Slider>
    </div>
  );
}