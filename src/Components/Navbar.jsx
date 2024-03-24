import React from "react";
import Logo from "../Resources/Logo.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import NavDropDown from "./NavDropDown";
import { useState, useEffect } from "react";
import "../Sass/Navbar.scss";
function Navbar() {
  const [initialItems, setInitialItems] = useState(["Home","Electronics","Books","Music","Movies","Clothing","Games"]);
  const [hiddenItems, setHiddenItems] = useState(["Furniture","Travel","Botanical","Category Name"]);
  const [showNavDropdown, setShowNavDropdown] = useState(false);
  const [prevWidth, setPrevWidth] = useState(window.innerWidth);
  const [mouseEnter,setMouseEnter]=useState(false);
  const HandleDropdown = () => {
    setShowNavDropdown(!showNavDropdown);
  };
  const handleResize=()=>{
    const screenWidth = window.innerWidth;
    const diff = prevWidth - screenWidth;
    if (diff >= 100 && initialItems.length > 2) {
      const itemToMove = initialItems.pop();
      setHiddenItems([ ...hiddenItems,itemToMove]);
      setPrevWidth(screenWidth);
    } else if (diff <= -100 && hiddenItems.length > 4) {
      const itemToMove = hiddenItems.pop();
      setInitialItems([...initialItems, itemToMove]);
      setPrevWidth(screenWidth);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialItems, hiddenItems, prevWidth]);

  return (
    <div className="navContainer">
      <div className="imageContainer">
        <img src={Logo} />
      </div>
      <div className="listConatiner">
        <ul className="listMain">
          {initialItems.map((el,ind)=>{
            return <li>{el}</li>
          })}
          <li className="moreList" onClick={HandleDropdown}>
            <p>More</p>
            <FaAngleDown className="down" />
            {showNavDropdown && <NavDropDown hiddenItems={hiddenItems}/>}
          </li>
        </ul>
      </div>
      <div className="searchConatiner">
        <IoSearchOutline />
        <input type="text" placeholder="Search something"/>
      </div>
    </div>
  );
}

export default Navbar;
