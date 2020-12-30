import React from "react";
import Slider from "react-slick";
 


 
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
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
    <div className="mx-5 mb-10 px-7 py-5">
    <Slider {...settings}>



      
        <div class="sm:w-1/4 p-1 focus:outline-none">
            <div class="px-4 py-6 text-center">
            <div class="mb-2">
                <img
                class="w-auto mx-auto rounded-full"
                src="https://i.pravatar.cc/190?img=58"
                alt=""
                />
            </div>
            <h2 class="text-xl pt-2 font-medium text-gray-700">Pande Muliada</h2>
            {/* <span class="text-blue-500 block mb-5">Front End Developer</span> */}
            </div>
        </div>


        <div class="sm:w-1/4 p-1 focus:outline-none">
            <div class="px-4 py-6 text-center">
            <div class="mb-2">
                <img
                class="w-auto mx-auto rounded-full"
                src="https://i.pravatar.cc/190?img=58"
                alt=""
                />
            </div>
            <h2 class="text-xl pt-2 font-medium text-gray-700">Pande Muliada</h2>
            {/* <span class="text-blue-500 block mb-5">Front End Developer</span> */}
            </div>
        </div>


        <div class="sm:w-1/4 p-1 focus:outline-none">
            <div class="px-4 py-6 text-center">
            <div class="mb-2">
                <img
                class="w-auto mx-auto rounded-full"
                src="https://i.pravatar.cc/190?img=58"
                alt=""
                />
            </div>
            <h2 class="text-xl pt-2 font-medium text-gray-700">Pande Muliada</h2>
            {/* <span class="text-blue-500 block mb-5">Front End Developer</span> */}
            </div>
        </div>



        <div class="sm:w-1/4 p-1 focus:outline-none">
            <div class="px-4 py-6 text-center">
            <div class="mb-2">
                <img
                class="w-auto mx-auto rounded-full"
                src="https://i.pravatar.cc/190?img=58"
                alt=""
                />
            </div>
            <h2 class="text-xl pt-2 font-medium text-gray-700">Pande Muliada</h2>
            {/* <span class="text-blue-500 block mb-5">Front End Developer</span> */}
            </div>
        </div>



        <div class="sm:w-1/4 p-1 focus:outline-none">
            <div class="px-4 py-6 text-center">
            <div class="mb-2">
                <img
                class="w-auto mx-auto rounded-full"
                src="https://i.pravatar.cc/190?img=58"
                alt=""
                />
            </div>
            <h2 class="text-xl pt-2 font-medium text-gray-700">Pande Muliada</h2>
            {/* <span class="text-blue-500 block mb-5">Front End Developer</span> */}
            </div>
        </div>



        <div class="sm:w-1/4 p-1 focus:outline-none">
            <div class="px-4 py-6 text-center">
            <div class="mb-2">
                <img
                class="w-auto mx-auto rounded-full"
                src="https://i.pravatar.cc/190?img=58"
                alt=""
                />
            </div>
            <h2 class="text-xl pt-2 font-medium text-gray-700">Pande Muliada</h2>
            {/* <span class="text-blue-500 block mb-5">Front End Developer</span> */}
            </div>
        </div>

        

    </Slider>
    </div>
  );
}