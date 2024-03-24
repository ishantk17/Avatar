import React, { useState,useEffect } from "react";
import { FaMinus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import "../Sass/Carousel.scss"; 
import Utensils from "../Resources/ModernUtensils.jpg";
import Cone from "../Resources/cone.jpg";
import Chair from "../Resources/chair.jpg";
import Flower from "../Resources/flower.jpg";
import Vase from "../Resources/vase.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [Utensils, Cone, Chair, Flower, Vase];
  const itemDescr=["Modern kitchen utensils" ,"Balancing Abstract Realities","Harmony in Abstraction","Elegance in Bloom","Radiant Simplicity" ]
  const totalItems = items.length;

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % totalItems);
  };

  const prevItem = () => {
    setCurrentIndex((currentIndex - 1 + totalItems) % totalItems);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % totalItems);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, totalItems]);

  return (
    <div className="mainContainer">
      <h1 className="title">Featured Products</h1>
      <h5 className="subTitle">
        Explore and discover a variety of products
      </h5>
      <div className="carouselContainer">
        <img
          src={items[(currentIndex - 2 + totalItems) % totalItems]}
          alt="image"
          className="carouselItem3 "
        />
        <img
          src={items[(currentIndex + 2) % totalItems]}
          alt="image"
          className="carouselItem4 "
        />
        <img
          src={items[(currentIndex - 1 + totalItems) % totalItems]}
          alt="image"
          className="carouselItem1 "
        />
        <img
          src={items[(currentIndex + 1) % totalItems]}
          alt="image"
          className="carouselItem2  "
        />
        <div className="currentSlideContainer">
          <h1 className="currentSlideTitle">{itemDescr[currentIndex]}</h1>
          <img
            src={items[currentIndex]}
            alt="image"
            className="currentSlideImage"
          />
        </div>
      </div>

      <div className="controls">
        <button onClick={prevItem} className="controlButton">
          <IoIosArrowBack />
        </button>
        <div className="circleIconContainer">
          {items.map((item, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`circle ${index === currentIndex ? "activeCircle" : ""}`}
            >
              {index === currentIndex ? <FaMinus /> : <GoDotFill />}
            </span>
          ))}
        </div>
        <button onClick={nextItem} className="controlButton">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
