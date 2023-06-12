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
  const [selectedCartElement, setSelectedCartElement] = useState([]);

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
    }, 3000);
  }

  return (
    <div className="App">
      <Header
        selectedCartElement={selectedCartElement}
        setSelectedCartElement={setSelectedCartElement}
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
        handleAddToCartArray={handleAddToCartArray}
        cartArray={cartArray}
        setCartArray={setCartArray}
      />
      <Footer />
    </div>
  );
};

export default App;
