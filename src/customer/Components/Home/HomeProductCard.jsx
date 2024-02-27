import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../config/api";

const HomeProductCard = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from your backend API
    fetch(`${API_BASE_URL}/api/products/all`)
      .then((response) => response.json())
      .then((data) => {
        // Filter products with the provided category id
        const filteredProducts = data.filter((product) => product.category.id === categoryId);
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [categoryId]);

  const handleClick = (productId) => {
    navigate(`/product/${productId}`); // Assuming you have a route for viewing individual products
  };

  return (
    <div className="product-list-container overflow-x-auto whitespace-nowrap">
      {products.map((product) => (
        <div
          key={product.id}
          className="cursor-pointer inline-block bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] h-[20rem] mx-3 mb-3"
          onClick={() => handleClick(product.id)}
        >
          <div className="h-[13rem] w-[10rem]">
            <img
              className="object-cover object-top w-full h-full"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-lg font-medium text-gray-900">
              {product.brand}
            </h3>
            <p className="mt-2 text-sm text-gray-500">{product.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeProductCard;
