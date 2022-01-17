import React, { useState } from "react";

function Item({ name, category }) {
  const[itemClass, setItemClass] = useState(true);
  const className = itemClass ? "" : "in-cart"

  function addToCart(){
    setItemClass(!itemClass)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{itemClass? "Add to Cart" : "Remove From Cart" }</button>
    </li>
  );
}

export default Item;
