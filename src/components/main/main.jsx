import React, { useState, useEffect } from "react";
import Catagories from "./childComponent/Catagories";
import Items from "./childComponent/Items";
import SelectedCatagory from "./childComponent/SelectedCatagory";
import assets from '../../asset/asset';

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
  
  const ObjectKeys = Object.keys(assets);
  const handleClickItem = (ObjectKey) => {
    setSelectedCatagories(ObjectKey);
  }

  const handleCatagoryItem = (itemName) => {
    setSelectedCatagories(itemName)
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
          />
        )}
      </main>
      <div className="sidebar-right">
          <div className="cart-box">
            <div className="cart-box-img">
              image here
            </div>
            <div className="cart-box-desc">
              desc here
            </div>
            <div className="cart-box-price">
              price here
            </div>
          </div>

      </div>
    </div>
  )
}

export default Main;
