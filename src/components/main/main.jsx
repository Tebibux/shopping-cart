import React from "react";
import Catagories from "./childComponent/Catagories";
import Items from "./childComponent/Items";
import SelectedCatagory from "./childComponent/SelectedCatagory";

import Quantity from "./childComponent/Quantity";
import ItemSelectedMessage from './childComponent/itemSelectedMessage';
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

const Main = ({
  selectedCatagories,
  selectedToCart, ObjectKeys,
  handleClickItem,
  handleCatagoryItem,
  handleAddToCart,
  handleConfirm,
  cartArray,
  setCartArray,
  showMessage
}) => {

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
        {
          showMessage ? (
            <ItemSelectedMessage />
          ) : (
            <Quantity
              selectedToCart={selectedToCart}
              handleConfirm={handleConfirm}
              cartArray={cartArray}
              setCartArray={setCartArray}
            />
          )
        }

      </div>

    </div>
  )
}

export default Main;
