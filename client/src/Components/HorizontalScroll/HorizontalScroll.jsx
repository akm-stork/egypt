import { motion } from "framer-motion";
import { Flower, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
// import { cards } from "./cards";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { cards } from "./cards";

const HorizontalScroll = ({yes, category}) => {
  const { i18n } = useTranslation();

  const userLanguage = localStorage.getItem('userLanguage') || 'en';
  useEffect(() => {
    // Get the user's preferred language or use a default language
    // Set the initial language and direction
    i18n.changeLanguage(userLanguage);
    document.documentElement.dir = userLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = userLanguage;

  }, [i18n, userLanguage]);

  
  
  return (
    <div className="bg-white h-fit">
      {yes ? <h1 className="md:text-3xl text-lg text-primary-multiply-color text-center bold relative top-10 flex flex-col gap-2">Bella Store · is Affiliated with<br /><span className="text-primary-color md:text-5xl text-3xl mx-2">Beauty & Fragrance Services</span><span className="text-2xl">Services Available</span> <Flower className="text-center m-auto"/></h1> : ''}
      {userLanguage === 'en' ? 
      <HorizontalScrollCarousel category={category}/>  : <HorizontalScrollCarouselAr category={category}/>}
    </div>
  );
};

const HorizontalScrollCarousel = ({category}) => {

  const [allproducts, setAllproducts] = useState([]);
  const fetchInfo = () => { 
  fetch('http://localhost:4000/allproducts') 
          .then((res) => res.json()) 
          .then((data) => setAllproducts(data))
  }
  useEffect(() => {
    fetchInfo();
  }, [])

    
  return (
    <section className="relative h-fit my-10">
      <div className="flex flex-wrap h-fit justify-center items-center">
        <motion.div style={{  }} className="flex flex-wrap gap-4 mx-10 regular">
          {allproducts.map((product) => {
            if(product.category === category) {
              return <Link to={`/product/${product.id}`}>
              <div
            className="group relative h-[350px] w-[300px] overflow-hidden bg-neutral-200 shadow-2xl shadow-red-400 rounded-2xl border border-red-700" key={product.id}
          >
            <div
              style={{
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center center",
                position: 'relative',
              }}
              className="absolute "
            ></div>
            <img className="overlay absolute top-0 left-0 h-full m-auto rounded-2xl inset-0 z-0 transition-transform duration-300 group-hover:scale-110" src={product.image} alt=""></img>
            <div className="absolute inset-0 z-10">
              <p className="bg-gradient-to-r from-primary-blend-color to-white/60 p-8 text-3xl font-black uppercase text-primary-color rounded-b-2xl absolute bottom-0 w-[65%]">
               {product.name}
              </p>
              {/* <p className=" p-8 text-2xl font-black uppercase">
                 {card.desc} 
              </p> */}
              <div className="absolute bottom-5 right-7 rounded-full border p-2 border-primary-color bg-primary-color hover:scale-125 transition-all duration-300"><Heart stroke="white"/></div>
            </div>
          </div>
             
      </Link>
            } else {
              return null
            }
})}
     
        </motion.div>
      </div>
    </section>
  );
};
const HorizontalScrollCarouselAr = ({category}) => {
  const [allproducts, setAllproducts] = useState([]);
  const fetchInfo = () => { 
  fetch('http://localhost:4000/allproducts') 
          .then((res) => res.json()) 
          .then((data) => setAllproducts(data))
  }
  const {t} = useTranslation();
  useEffect(() => {
    fetchInfo();
  }, [])
  return (
    <section  className="relative h-fit">
      <div className="flex flex-wrap h-fit justify-center items-center">
        <motion.div style={{  }} className="flex flex-wrap gap-4 mx-10 regular">
          {allproducts.map((product) => {
            if(product.category === category) {
            return <Link to={`/product/${product.id}`}>
              <div
            className="group relative h-[350px] w-[300px] overflow-hidden bg-neutral-200 shadow-2xl shadow-red-400 rounded-2xl border border-red-700"
            key={product.id}
          >
            <div
              style={{
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center center",
                position: 'relative',
              }}
              className="absolute "
            ></div>
            <img className="overlay absolute top-0 left-0 h-full max-w-[100%] m-auto rounded-2xl inset-0 z-0 transition-transform duration-300 group-hover:scale-110" src={product.image} alt=""></img>
            <div className="absolute inset-0 z-10">
              <p className="bg-gradient-to-r from-primary-blend-color to-white/60 p-8 text-3xl font-black uppercase text-primary-color rounded-b-2xl absolute bottom-0 w-[65%]">
                {t(`${product.name}`)}
              </p>
              <div className="absolute bottom-5 left-7 rounded-full border p-2 border-primary-color bg-primary-color hover:scale-125 transition-all duration-300"><Heart stroke="white"/></div>
              <p className=" p-8 text-2xl font-black uppercase">
                {/* {product.desc} */}
              </p>
            </div>
          </div>
             
      </Link>
             
            } else {
              return null;
            }
          
          })}
        
        </motion.div>
      </div>
    </section>
  );
};
// const Card = ({ card }) => {
//   return (
    
//   );
// };

export default HorizontalScroll;
