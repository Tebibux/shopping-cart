import React from "react";
import assets from '../../../asset/asset';
import uuid4 from "uuid4";


const Items = () => {
	const itemsKey = Object.entries(assets);
	// map through the items 
	// extract item and in each item randomize from the ten item
	// choose one item and display the choose one
	// const itemsAsset = Object.key(itemsKey);
	console.log(itemsKey.map(item => Object.entries(item)));

	return <h1>Items</h1>
}

export default Items;