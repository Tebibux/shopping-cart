import React from "react";
import assets from '../../../asset/asset';
import uuid4 from "uuid4";


const Items = () => {
	const assetObject = assets;
	// map through the items 
	// extract item and in each item randomize from the ten item
	// choose one item and display the choose one
	// const itemsAsset = Object.key(itemsKey);
	// console.log(itemsKey.map(item => Object.entries(item)));
	// console.log(assetObject.clothes.asset1.productDisc)
	const ObjectKeys = Object.keys(assetObject);
	const assetNameHolder = () => {
		const assetArray = [];
		const assetName = 'asset';
		for (let i = 1; i < 11; i++) {
			if (assetArray.includes(`${assetName}${i}`)) {
				return;
			} else {
				assetArray.push(`${assetName}${i}`);
			}
		}
		return assetArray;
	};
	// an array that holds the array with the number
	const assetName = assetNameHolder();


	return (
		<div className="display-item">
			{
				ObjectKeys.map(ObjectKey => {
					// console.log(assetPosition)
					return (
						<>
							<li key={uuid4()}>{assetObject[ObjectKey][assetName[Math.floor(Math.random() * 6)]].productDisc}</li>
						</>
					)
				})
			}

		</div>
	)
}

export default Items;