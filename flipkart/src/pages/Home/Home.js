import { CategoryBarData,CarouselData,BestOf } from "../../data";
import CategoryBar from "../../components/CategoryBar.js";
import React from "react";
import "./Home.css";
import BannerCarousel from "../../components/BannerCarousel.js";
import ProductCarousel from "../../components/ProductCarousel.js";


export default function Home() {
  return (
    
    <div className="Home">
      <div className="Home-CategoryContainer">
        <div className="Home-CategoryBar">
          {CategoryBarData.map((item,index)=>(
            <CategoryBar 
            key={index}
            Imgsrc={item.imageSrc}
            CategoryName={item.category}/>
          ))}
        </div>
         
      </div>
        <div className="Home-Container">
          <div className="Home-Carousel">
        <BannerCarousel data={CarouselData}/>

          </div>
          <div className="Home-ProductCarousel">
           <ProductCarousel 
           BgImg =  "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
           Title="Best of Electronics"
           Data={BestOf.Electronics}
           />
           <ProductCarousel 
           BgImg ="https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
           Title="Beauty food and toys"
           Data={BestOf.Electronics}
           />
           <ProductCarousel 
           BgImg ="https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
           Title="wedding gift"
           Data={BestOf.Electronics}
           />
          </div>
        </div>

    </div>


      
   
    
  )
}
