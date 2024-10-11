"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const SliderItemProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSliderVisible, setIsSliderVisible] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data); // Update with the product data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the product data:", error);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  // Toggle function for slider visibility
  const toggleSliderVisibility = () => {
    setIsSliderVisible((prev) => !prev);
  };

  return (
    <div>
      {/* items-Sectioninfo */}
      <div className="items-Sectioninfo">
        <div className="items-sort">
          <h1>3425 ITEMS</h1>
          <h1 id="items-numb " className="hide-filter opacity-50 cursor-pointer" onClick={toggleSliderVisibility}>{isSliderVisible ? "HIDE FILTER" : "SHOW FILTER"}</h1>
        </div>
        <div className="option w-[5%]  mr-[20%]">
          <select className="recommended ">
            <option value="0">RECOMMENDED</option>
            <option value="1">NEWEST FIRST</option>
            <option value="2">POPULAR</option>
            <option value="3">PRICE: HIGH TO LOW</option>
            <option value="4">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <div className="sliderProduct-info h-[100%] w-screen -mt-[5%]">
        <div className="flex h-full w-full">
          {/* Slider info */}
          {isSliderVisible && (
            <div className="silder h-screen w-[30%] ">
            <div className="slider-info p-4 ml-[15%]">
              <div className="selection">
                <div className="checkbox flex gap-5">
                  <input type="checkbox" className="h-4 w-5" /> <span>CUSTOMIZABLE</span>
                </div>
                <div className="select">
                  <select >
                    <option value="0" >IDEAL FOR</option>
                  </select>
                  <p>All</p>
                </div>
              </div>
              <div className="selection">
                <div className="select">
                  <select>
                    <option value="1">OCCASION</option>
                  </select>
                  <p>All</p>
                </div>
              </div>
              <div className="selection">
                <div className="select">
                  <select>
                    <option value="2">WORK</option>
                  </select>
                  <p>All</p>
                </div>
              </div>
              <div className="selection">
                <div className="select">
                  <select>
                    <option value="3">FABRIC</option>
                  </select>
                  <p>All</p>
                </div>
              </div>
              <div className="selection">
                <div className="select">
                  <select>
                    <option value="4">SEGMENT</option>
                  </select>
                  <p>All</p>
                </div>
              </div>
              <div className="selection">
                <div className="select">
                  <select>
                    <option value="5">SUITABLE FOR</option>
                  </select>
                  <p>All</p>
                </div>
              </div>
              <div className="selection">
                <div className="select">
                  <select>
                    <option value="6">RAW MATERIALS</option>
                  </select>
                  <p>All</p>
                </div>
              </div>
              <div className="selection">
                <div className="select">
                  <select>
                    <option value="7">PATTERN</option>
                  </select>
                  <p>All</p>
                </div>
              </div>
              
            </div>
          </div>
          )}

          {/* Product info */}
          <div className="product-info h-screen w-[70%] mr-[5%] ">
            <div className="product-section grid grid-cols-3 gap-4 p-4">
              {loading ? (
                <p>Loading products...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                products.map((product) => (
                  <div key={product.id} className="product-item flex flex-col items-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-48 w-48 object-cover"
                    />
                    <h2>{product.title}</h2>
                    <span className="like-icon  relative -top-[30%] -right-[40%]">
                    <FontAwesomeIcon icon={faHeart}  />
                    </span>
                    <p>
                      <span className="sign-underline">Sign in</span> or Create
                      an account to see pricing
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItemProduct;
