import React, { useState } from "react";
import Catagories from "./childComponent/Catagories";
import Items from "./childComponent/Items";
import Cart from "./childComponent/cart";
import assets from '../../asset/asset';



// an array that holds the array with the number
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
  const [selectedItem, setSelectedItem] = useState('');
  const ObjectKeys = Object.keys(assets);


  const handleClickItem = (ObjectKey) => {
    return setSelectedItem(assets[ObjectKey]);
  }



  return (
    <div className="container">
      <div className="sidebar-left">
        <Catagories />
      </div>
      <main className="content">
        <Items
          ObjectKeys={ObjectKeys}
          assetName={assetNameHolder()}
          handleClickItem={handleClickItem}
        />
      </main>
      <div className="sidebar-right">
        <Cart selectedItem={selectedItem} />
      </div>
    </div>
  )
}

export default Main;