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
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  // use to display the message box
  const ObjectKeys = Object.keys(assets);


  const handleClickItem = (ObjectKey) => {
    setSelectedCatagories(ObjectKey);
    const cartQuantityBox = document.querySelector('.cart-quantity-box');
    if (!cartQuantityBox) return;

  }
  const handleCatagoryItem = (itemName) => {
    setSelectedCatagories(itemName);
  }

  // select the item and displayed on the quantity element
  // map through the selected to cart array 
  // and display in the items component
  const handleAddToCart = (item) => {
    setSelectedToCart([...selectedToCart, item]);
  }

  // takes value and display a message
  // declare a new html and display the message that
  // item selected or item input box Should not be empty

  // const messageToDisplay = () => {

  // }

  // handle the Item that added to the cart array
  // and to be displayed in the array
  const handleConfirm = (itemToBeAdded, numberOfQuantity=quantity) => {
    if(!cartArray.includes(itemToBeAdded)) setCartArray([...cartArray, itemToBeAdded])
    else{
      setShowMessage(true);
    }
    console.log(showMessage);
  }

  return (
    <div className="App">
      <Header cartArray={cartArray}
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
