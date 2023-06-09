import React, { useState } from "react";
import Catagories from "./childComponent/Catagories";
import Items from "./childComponent/Items";
import SelectedCatagory from "./childComponent/SelectedCatagory";
import assets from '../../asset/asset';
import Quantity from "./childComponent/Quantity";
import ItemSelected from './childComponent/itemSelectedMessage';
// Function to generate an array with asset names
export const assetNameHolder = () => {
  const assetArray = [];
  const assetName = 'asset';
  for (let i = 1; i < 11; i++) {
    const asset = `${assetName}${i}`;
    if (!assetArray.includes(asset)) {
      assetArray.push(asset);
    }
  }
  return assetArray;
};

const Main = () => {
  const [selectedCatagories, setSelectedCatagories] = useState('');
  const [selectedToCart, setSelectedToCart] = useState([])
  const [cartArray, setCartArray] = useState([]);

  const ObjectKeys = Object.keys(assets);


  const handleClickItem = (ObjectKey) => {
    setSelectedCatagories(ObjectKey);
    const cartQuantityBox = document.querySelector('.cart-quantity-box');
    console.log("🚀 ~ file: main.jsx:32 ~ handleClickItem ~ cartQuantityBox:", cartQuantityBox)
    cartQuantityBox.style.display = "flex";


  }

  const handleCatagoryItem = (itemName) => {
    setSelectedCatagories(itemName)
    // const cartQuantityBox = document.querySelector('.cart-quantity-box');
    const cartQuantityBox = document.querySelector('.cart-quantity-box');
    console.log("🚀 ~ file: main.jsx:32 ~ handleCatagoryItem ~ cartQuantityBox:", cartQuantityBox);
    cartQuantityBox.style.display = "flex";

  }
  const handleAddToCart = (item) => {
    setSelectedToCart([...selectedToCart, item]);
  }
  // handles the array update
  const handleAddToCartArray = (selectedToCart, inputValue) => {
    const newCartItem = {
      selectedToCart: selectedToCart[selectedToCart.length - 1],
      inputValue: inputValue < 1 ? 1 : inputValue
    };

    // make the quantity box invisible
    // display the item selected box
    setCartArray([...cartArray, newCartItem]);
    const cartQuantityBox = document.querySelector('.cart-quantity-box');
    const itemSelectedMessageBox =
      document.querySelector('.item-selected-message-box');
    cartQuantityBox.style.display = "none"
    itemSelectedMessageBox.style.display = "grid";
    setTimeout(() => {
      itemSelectedMessageBox.style.display = "none";
    }, 1000);
  }
  return (
    <div className="container">
      <div className="sidebar-left">
        <Catagories
          handleCatagoryItem={handleCatagoryItem}
        />
      </div>
      <main className="content">
        {selectedCatagories === '' ? (
          <Items
            ObjectKeys={ObjectKeys}
            assetName={assetNameHolder()}
            handleClickItem={handleClickItem}
          />
        ) : (
          <SelectedCatagory
            selectedCatagories={selectedCatagories}
            handleAddToCart={handleAddToCart}
          />
        )}
      </main>
      <div className="sidebar-right">
        <Quantity
          selectedToCart={selectedToCart}
          handleAddToCartArray={handleAddToCartArray}
          cartArray={cartArray}
          setCartArray={setCartArray}
        />
        <ItemSelected />
      </div>
    </div>
  )
}

export default Main;
