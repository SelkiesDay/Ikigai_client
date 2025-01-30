import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Inspirations.module.css"
const Inspirations = () => {
  const categories = [
    {
      name: "Movies",
      items: [
        {
          title: "Paterson (2016)",
          description: "A bus driver and poet finds beauty in the mundane.",
          image: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Perfect Days (2023)",
            description: "A meditative journey of a Tokyo toilet cleaner finding joy in simplicity.",
            image: "https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          },
          
          {
            title: "The Farewell (2019)",
            description: "A heartfelt story about family, culture, and finding meaning in relationships.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
          },
          {
            title: "Columbus (2017)",
            description: "A visually stunning film about architecture, connection, and finding purpose.",
            image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            title: "Our Little Sister (2015)",
            description: "A gentle story about family, connection, and the small joys of life.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
          },
      ],
    },
    {
      name: "Books",
      items: [
        {
            title: "The Art of Simple Living",
            description: "100 practical tips for finding calm and purpose in daily life.",
            image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
          },
          {
            title: "Wabi Sabi: Japanese Wisdom for a Perfectly Imperfect Life",
            description: "Finding beauty in imperfection and simplicity.",
            image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            title: "The Life-Changing Magic of Tidying Up",
            description: "Declutter your space and mind to create room for joy.",
            image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
          },
          {
            title: "A Monk’s Guide to a Clean House and Mind",
            description: "How everyday tasks can lead to mindfulness and purpose.",
            image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            title: "The Sound of a Wild Snail Eating",
            description: "Finding wonder and meaning in the smallest details of life.",
            image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
          },
      ],
    },
    {
      name: "Podcasts",
      items: [
        {
            title: "The Slowdown",
            description: "Daily poetry to encourage mindfulness and reflection.",
            image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          },
          {
            title: "On Being with Krista Tippett",
            description: "Deep conversations about meaning, spirituality, and humanity.",
            image: "https://images.pexels.com/photos/3819818/pexels-photo-3819818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            title: "The Daily Stoic",
            description: "Applying Stoic philosophy to modern life.",
            image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          },
          {
            title: "The Mindful Kind",
            description: "Practical tips for mindfulness and self-care.",
            image: "https://images.pexels.com/photos-3819818/pexels-photo-3819818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            title: "The Simple Sophisticate",
            description: "Living a fulfilling life through simplicity and authenticity.",
            image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          },
      ],
    },
  ];
  const navigate = useNavigate();
  return (
    <div id={styles.main_container} className={styles.wrapper}>
    <div className="max-w-4xl mx-auto py-10 space-y-16">
      <h1 id={styles.ikigai} className='font-tsukimi text-center '>Ikiga-i</h1>
      <h1 className="text-4xl text-center mb-24 font-gotu">Inspirations</h1>

      {categories.map((category, index) => (
        <CategorySlider key={index} title={category.name} items={category.items} />
      ))}

      <div id={styles.button_container} className="text-center mt-10" >
      <button onClick={() => navigate("/explore")} className="px-6 py-2  hover:bg-gray-400 transition-colors rounded-2xl">Return to Explore</button>
         {/* <div className={styles.previous} onClick={() => navigate("/explore")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"  width="25" height="27"  >
              <path stroke="#D9D9D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
           </div> */}
        
      </div>
    </div>
    </div>
  );
};

const CategorySlider = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };


  return (
    <div id={styles.second_main_container} className="relative">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 text-center p-4 font-gotu">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">{item.title}</h2>
              <p className="text-lg mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white rounded-full p-2 shadow-lg"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-gray-800"
      >
        &#8594;
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              currentIndex === index 
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Inspirations;



