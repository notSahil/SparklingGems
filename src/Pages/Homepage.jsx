import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lengha_page1 } from "../Data/Women/LenghaCholi";
import HomeProductCard from "../customer/Components/Home/HomeProductCard";

// Import the SearchAppBar component
// import SearchAppBar from "../Product/SearchAppBar";
import SearchAppBar from "../customer/Components/Product/Product/SearchAppBar"
import ProductSearch from "../customer/Components/Product/Product/ProductSearch";
import ProminentAppBar from "../customer/Components/Product/Product/ProminentAppBar";


const Homepage = () => {
  return (
    <div className="">
      {/* <ProminentAppBar/> */}
      
   

      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={mens_kurta} section={"Women's Earring"} />
        <HomeProductCard categoryId={305} />
        <HomeProductSection data={mensShoesPage1} section={"Women's Ring"} />
        <HomeProductCard categoryId={306} />
        {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
        <HomeProductSection data={gounsPage1} section={"Men's Accessories"} />
        <HomeProductCard categoryId={303} />
        <HomeProductSection data={kurtaPage1} section={"Women's Accessories"}  />
        <HomeProductCard categoryId={404} />
        
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>
    </div>
  );
};

export default Homepage;
