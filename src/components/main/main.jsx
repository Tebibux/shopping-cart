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

  useEffect(() => {
    // Perform any logic you need when selectedCatagories changes
    // This code will execute whenever selectedCatagories changes its value

    // Example: Fetch data or update something based on selectedCatagories value
    console.log("selectedCatagories changed:", selectedCatagories);
  }, [selectedCatagories]); // Add selectedCatagories as a dependency to trigger the effect when it changes

  return (
    <div className="container">
      <div className="sidebar-left">
        <Catagories />
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
            ObjectKeys={ObjectKeys}
            assetName={assetNameHolder()}
            handleClickItem={handleClickItem}
            selectedCatagories={selectedCatagories}
          />
        )}
      </main>
      <div className="sidebar-right"></div>
    </div>
  )
}

export default Main;
