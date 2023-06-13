import React, { useState } from 'react';
import './css/style.css';
import assets from './asset/asset';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
const App = () => {
  const [selectedCatagories, setSelectedCatagories] = useState('');
  const [selectedToCart, setSelectedToCart] = useState([])
  const [cartArray, setCartArray] = useState([]);
  const [userInput, setUserInput] = useState(1);


  const ObjectKeys = Object.keys(assets);


  const handleClickItem = (ObjectKey) => {
    setSelectedCatagories(ObjectKey);
    const cartQuantityBox = document.querySelector('.cart-quantity-box');
    if (!cartQuantityBox) return;
    console.log("🚀 ~ file: main.jsx:32 ~ handleClickItem ~ cartQuantityBox:", cartQuantityBox)
    cartQuantityBox.style.display = "flex";
  }
  const handleCatagoryItem = (itemName) => {
    setSelectedCatagories(itemName);
    const cartQuantityBox = document.querySelector('.cart-quantity-box');
    if (!cartQuantityBox) return;
    console.log("🚀 ~ file: main.jsx:32 ~ handleClickItem ~ cartQuantityBox:", cartQuantityBox)
    // cartQuantityBox.style.display = "flex";
  }
  const handleAddToCart = (item) => {
    setSelectedToCart([...selectedToCart, item]);
  }
  // handles the array update
  const handleConfirm = (confirmToArray, inputValue) => {
    if (inputValue === 0) return
    // make the quantity box invisible
    // display the item selected box
    // setCartArray([...cartArray, newCartItem]);
    setUserInput(inputValue);
    // setSelectedToCart([...cartArray, selectedToCart]);


  }

  return (
    <div className="App">
      <Header
      />
      <Main
        selectedCatagories={selectedCatagories}
        setSelectedCatagories={setSelectedCatagories}
        selectedToCart={selectedToCart}
        setSelectedToCart={setSelectedToCart}
        ObjectKeys={ObjectKeys}
        handleClickItem={handleClickItem}
        handleCatagoryItem={handleCatagoryItem}
        handleAddToCart={handleAddToCart}
        handleConfirm={handleConfirm}
        cartArray={cartArray}
        setCartArray={setCartArray}
      />
      <Footer />
    </div>
  );
};

export default App;
