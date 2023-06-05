import React from "react";
import assets from '../../../asset/asset';
import uuid4 from "uuid4";


const Items = () => {
	// map through the items 
	// extract item and in each item randomize from the ten item
	// choose one item and display the choose one
	const ObjectKeys = Object.keys(assets);
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
					const product = assets[ObjectKey][assetName[Math.floor(Math.random() * 6)]];
					const productImg = product.image;
					const productDisc = product.productDisc;
					const productPrice = product.productPrice;

					return (
						<>
							<div className="display-item-box" key={uuid4()}>
								<div className="product-item-image">
									<img src={productImg} alt={productDisc} />
								</div>
								<div className="product-item-disc">
									<p className="product-item-description">
										{productDisc}
									</p>
									<p className="product-item-price">
										<span className="dollar">$</span>
										<span className="number">
											{productPrice}
											<span className="nine-number">.99</span>
										</span>

									</p>
								</div>

							</div>
						</>
					)
				})
			}

		</div>
	)
}

export default Items;