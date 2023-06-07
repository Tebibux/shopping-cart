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
  const [catagorySelected, setCatagorySelected] = useState('');
  const ObjectKeys = Object.keys(assets);
  const handleClickItem = (ObjectKey) => {
    setSelectedCatagories(ObjectKey);
  }
  const handleCatagoryItem = (e) => {
    setCatagorySelected(e.target.value)
  }

  return (
    <div className="container">
      <div className="sidebar-left">
        <Catagories
          handleClickItem={handleCatagoryItem}
        />
      </div>
      <main className="content">
        {selectedCatagories === '' && catagorySelected === '' ? (
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
      <div className="sidebar-right"></div>
    </div>
  )
}

export default Main;
