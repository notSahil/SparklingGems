

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import { API_BASE_URL } from "../../../../config/api";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const handleFetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/products/all`);
      console.log(response.data);
      setData(response.data);
      dispatch({ type: 'UPDATE_PRODUCTS', payload: response.data });
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, []); 
  return (
    <div className="px-10 -z-10">
      <div className="flex justify-between py-5">
        <p className="font-bold">Filter</p>
        <p>Sort</p>
      </div>

 
      <div className="flex justify-between">

        <div className="w-[20%] border rounded-md bg-white"></div>


        <div className="flex flex-wrap justify-between w-[78%] bg-white border p-5 rounded-md">
          {data.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
